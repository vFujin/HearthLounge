import {ref} from '../../../keys';

/**
 * Reads user details
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user details
 */
export default function (uid, callback) {
  return ref.once("value", (snapshot) =>callback(snapshot.child(`users/${uid}`).val()))
}