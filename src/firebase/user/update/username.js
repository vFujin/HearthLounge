import {ref, firestore} from '../../../keys';
import {success, error} from '../../../utils/messages';

/**
 * Updates User's username (if it wasn't set yet)
 *
 * @param {object} activeUser - Currently logged user
 * @param {string} username - User's username
 * @param {function} updateSignUpStatus - updates sign up phase 2 progress bar state
 */
export default function (activeUser, username, updateSignUpStatus){
  if(!activeUser.updatedProfile) {
    firestore.collection('users').doc(activeUser.uid).update({
      username,
      updatedProfile: true
    }).then(()=>{
      updateSignUpStatus("success", "success");
      success("Profile has been updated!");
    }).catch(err =>{
      updateSignUpStatus("success", "failure");
      error(err, 4);
    })
  } else error("Your profile has been already updated. You can update your profile in your dashboard", 10)
}