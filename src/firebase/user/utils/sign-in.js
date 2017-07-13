import {firebaseAuth} from '../../../keys';
import {success, error} from '../../../utils/messages';
import {browserHistory} from 'react-router';

/**
 * Signs in user and redirects to user's dashboard on success.
 *
 * @param {string} email - The user's e-mail address.
 * @param {string} pass - The user's password.
 * @returns {any|firebase.Thenable<any>}
 */
export default function (email, pass){
  return firebaseAuth().signInWithEmailAndPassword(email, pass)
      .then(()=>{
        success("Signed in successfully!");
        browserHistory.push('/dashboard')
      })
      .catch(e=>error("Couldn't sign in. " + e.message));
}
