import {refParent} from '../../../keys';

/**
 * Reads simplified user details; that is username, profile picture, rank and role
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user simplified details
 */
export default function (uid, callback) {
  return refParent('users').once("value", (snapshot)=>{
    const user = snapshot.child(uid).val();
    let simplifiedUser = {
      username: user.username,
      avatar: user.avatar ? user.avatar : false,
      rank: user.rank,
      role: user.role
    };

    callback(simplifiedUser);
  })
}