import {firebaseAuth} from '../../../keys';

/**
 * Updates user's email
 *
 * @param {string} email - User's new email
 */
export default function (email){
  let user = firebaseAuth().currentUser;
  user.updateEmail(email)
}