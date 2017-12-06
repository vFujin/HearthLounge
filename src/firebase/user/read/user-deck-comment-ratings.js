import {ref} from '../../../keys';

/**
 * Reads user deck newComment ratings details
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user deck newComment ratings details
 */
export default function (uid, callback){
  return ref.child(`user-deck-comment-ratings/${uid}`).once("value", snapshot=>{
    callback(snapshot.value());
  })
}