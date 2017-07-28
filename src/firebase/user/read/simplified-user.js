import {refParent} from '../../../keys';

/**
 * Reads simplified user details, that is username, profile picture and prestige
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user simplified details
 */
export default function (uid, callback) {
  return refParent('users').once("value", (snapshot)=>{
    const user = snapshot.child(uid).val();
    let simplifiedUser = {
      username: user.username,
      profilePic: user.profilePic,
      prestige: user.prestige
    };

    callback(simplifiedUser);
  })
}