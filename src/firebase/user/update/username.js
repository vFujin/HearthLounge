import {ref} from '../../../keys';
import {success, error} from '../../../utils/messages';

export default function (user, username, updateSignUpStatus){
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