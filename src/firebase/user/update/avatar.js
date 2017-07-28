import {ref, firebaseStorage} from '../../../keys';
import {success, error} from '../../../utils/messages';

/**
 * Updates user's avatar
 *
 * @param {event} e
 * @param {object} activeUser - Currently logged user
 * @param {function} updateFormProperty - Updates redux's signUp_avatar state, returns `true` if meets all requirements
 */
export default function (e, activeUser, updateFormProperty){
  const uploader = document.getElementById("uploader");
  const fileButton = document.getElementById("fileButton");

  if(fileButton) {
    let file = e.target.files[0];
    const fileType = /^(image\/(jpe?g|png))$/.test(file.type);
    const fileSize = file.size;
    const fileNameLength = file.name.length;
    // const fileValues = [fileType, fileSize, fileNameLength];

    if(!fileType){
      error("Image must be a .jpg, .jpeg or .png", 6);
      updateFormProperty({signUp_avatar: false});
    } else if(fileSize >= 2 * 1024 * 1024){
      error("Image size must be less than 2mb", 6);
      updateFormProperty({signUp_avatar: false})
    } else if(fileNameLength > 10){
      error("Image name must be less or equal than 10 characters", 10);
      updateFormProperty({signUp_avatar: false})
    } else {
      let storageRef = firebaseStorage().ref(`${activeUser.uid}/avatar/${file.name}`);
      let task = storageRef.put(file);

      task.on('state_changed',
          function progress(snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          function error() {
            if (!fileType) {
              error("Image must be a .jpg, .jpeg or .png", 6);
            } else if(!fileSize){
              error("Image must be less than 2mb", 6);
            } else if(fileNameLength > 10){
              error("Image name must be less or equal than 10 characters", 10);
            } else {
              error("Couldn't upload image. Try again later", 6);
            }
            updateFormProperty({signUp_avatar: false})
          },
          function complete() {
            let avatar = task.snapshot.downloadURL;
            success("Image has been uploaded!");

            let updatedAvatar = {
              ...activeUser,
              avatar
            };

            let updates = {};
            updates[`users/${activeUser.uid}`] = updatedAvatar;
            ref.update(updates, function (err) {
              if (err) {
                error("Something's not quite right. Try again later.", 4);
              } else {
                success("Profile has been updated!");
              }
            });

            updateFormProperty({signUp_avatar: true})
          }
      )
    }
  }
}