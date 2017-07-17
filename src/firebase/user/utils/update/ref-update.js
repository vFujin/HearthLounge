import {ref} from '../../../../keys';
import {onComplete} from '..';

/**
 * Updates object in firebase
 *
 * @param {string} refChild - Firebase reference
 * @param {object} objToUpdate - Object to update
 */
export default function(refChild, objToUpdate){
  return ref.child(refChild).update(objToUpdate, onComplete);
}