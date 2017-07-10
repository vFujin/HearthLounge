import {ref, firebaseAuth, firebaseStorage} from '../keys';
import {browserHistory} from 'react-router';
import {success, error} from '../utils/messages';

/**
 * Creates new user.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's chosen password.
 * @param {func} updateSignUpStatus - Callback function to pass data into signUpStatus reducer.
 * @param {func} reducer - Callback function to pass data into activeUser reducer.
 * @returns {!firebase.Promise.<*>}
 */
export function createUser(email, password, updateSignUpStatus, reducer){
  firebaseAuth().createUserWithEmailAndPassword(email, password)
      .then((user)=>{
        updateSignUpStatus("success", null);
        reducer(true, {
          username: user.email,
          email: user.email,
          uid: user.uid,
          updatedProfile: false,
          prestige: 1,
          role: 'user'
        });
        browserHistory.push('/sign-up/update-profile');
        saveUser(user);
      })
      .catch(e => {
        updateSignUpStatus("failure", null);
        error("Couldn't save user. " + e.message)
      });
}

/**
 * Signs out the current user.
 *
 * @param {func} e - event
 * @returns {any|firebase.Thenable<any>}
 */
export function logout(e){
  e.preventDefault();
  return firebaseAuth().signOut()
      .then(()=>{
        success("Signed out successfully!");
      })
      .catch(e=>error("Couldn't sign out. " + e.message, 4));
}

/**
 * Signs in user and redirects to user dashboard on success.
 *
 * @param {string} email - The user's e-mail address.
 * @param {string} pass - The user's password.
 * @returns {any|firebase.Thenable<any>}
 */
export function signIn(email, pass){
  return firebaseAuth().signInWithEmailAndPassword(email, pass)
      .then(()=>{
        success("Signed in successfully!");
        browserHistory.push('/dashboard')
      })
      .catch(e=>error("Couldn't sign in. " + e.message, 4));
}

// export function resetPassword(email) {
//   return firebaseAuth().sendPasswordResetEmail(email);
// }

/**
 * Saves user to Firebase.
 *
 * @param {object} user - The user's details.
 */
export function saveUser(user){
  if(user){
    const {email, uid} = user;

    let newUser = {
      updatedProfile: false,
      prestige: 1,
      role: 'user',
      username: email,
      email,
      uid
    };

    let updates = {};
    updates[`users/${uid}`] = newUser;

    return ref.update(updates);
  }
}


export function updateUser(user, username, updateSignUpStatus){
  if(!user.updatedProfile) {
    let updatedUsername = {
      ...user,
      updatedProfile: true,
      username
    };

    let updates = {};
    updates[`users/${user.uid}`] = updatedUsername;
    updates[`usernames/${username}`] = user.uid;
    return ref.update(updates, function (err) {
      if (err) {
        updateSignUpStatus("success", "failure");
        error("Something's not quite right. Try again later.", 4);
      } else {
        updateSignUpStatus("success", "success");
        success("Profile has been updated!");
      }
    });
  } else error("Your profile has been already updated. You can update your profile in your dashboard", 10)
}

export function updateUserProfilePic(e, user, updateFormProperty){
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
        updateFormProperty({signUp_profilePic: false});
      } else if(fileSize >= 2 * 1024 * 1024){
        error("Image size must be less than 2mb", 6);
        updateFormProperty({signUp_profilePic: false})
      } else if(fileNameLength > 10){
        error("Image name must be less or equal than 10 characters", 10);
        updateFormProperty({signUp_profilePic: false})
      } else {
        let storageRef = firebaseStorage().ref(`${user.uid}/profilePicture/${file.name}`);
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
              updateFormProperty({signUp_profilePic: false})
            },
            function complete() {
              let photoURL = task.snapshot.downloadURL;
              success("Image has been uploaded!");

              let updatedProfilePic = {
                ...user,
                photoURL
              };

              let updates = {};
              updates[`users/${user.uid}`] = updatedProfilePic;
              ref.update(updates, function (err) {
                if (err) {
                  error("Something's not quite right. Try again later.", 4);
                } else {
                  success("Profile has been updated!");
                }
              });

              updateFormProperty({signUp_profilePic: true})
            }
        )
      }
  }
}



export function getUserData(uid, callback) {
  return ref.on("value", (snapshot) =>callback(snapshot.child(`users/${uid}`).val()))
}

export function getCurrentUserInfo(reducer){
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      getUserData(user.uid, (v)=> {
        reducer(true, v)
      });
    } else {



      reducer(false, null);
    }
  });
}