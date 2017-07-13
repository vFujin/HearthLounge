import {ref} from '../../../keys';

/**
 * Reads user deck comment ratings details
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user deck comment ratings details
 */
export default function (uid, callback){
  return ref.child(`user-deck-comment-ratings/${uid}`).once("value", snapshot=>{
    callback(snapshot.value());
  })
}