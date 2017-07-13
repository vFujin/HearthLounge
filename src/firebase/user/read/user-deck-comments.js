import {ref} from '../../../keys';

/**
 * Reads user deck comments details
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user deck comments details
 */
export default function (uid, callback){
  return ref.child(`user-deck-comments/${uid}`).once("value", snapshot=>{
    callback(snapshot.value());
  })
}