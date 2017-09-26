import {ref} from '../../../keys';

/**
 * Reads user details
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user details
 */
export default function (uid, resolve, reject) {
  return ref.child(`users/${uid}`).once("value", (snapshot)=>resolve(snapshot.val()), err => reject(err))
}