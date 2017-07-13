import {firebaseAuth} from '../../../keys';

/**
 * Updates user's email
 *
 * @param {string} email - User's new email
 * @param {object} activeUser - Currently logged user
 */
export default function (email, activeUser){
  let user = firebaseAuth().currentUser;
  user.updateEmail(email)
}