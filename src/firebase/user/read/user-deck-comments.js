import {refParent} from '../../../keys';

/**
 * Reads user deck comments details
 *
 * @param {string} uid - User ID
 * @param {function} callback - returns user deck comments details
 */
export default function (uid, callback){
  return refParent('user-deck-comments').once("value", snapshot=>{
    callback(snapshot.val());
  })
}