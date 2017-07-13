import {ref} from '../../../keys';

/**
 * Reads user decks details
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user decks details
 */
export default function (uid, callback){
  return ref.child(`user-decks/${uid}`).once("value", snapshot=>{
    callback(snapshot.value());
  })
}