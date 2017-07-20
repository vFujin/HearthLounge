import {refParent} from '../../../keys';

/**
 * Reads user details
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user details
 */
export default function (uid, callback) {
  return refParent('users').once("value", (snapshot)=>callback(snapshot.child(uid).val()))
}