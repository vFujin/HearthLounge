import {firebaseAuth} from '../../../keys';
import {success, error} from '../../../utils/messages';

/**
 * Signs out the current user.
 *
 * @param {func} e - event
 * @returns {any|firebase.Thenable<any>}
 */
export default function (e){
  e.preventDefault();
  return firebaseAuth().signOut()
      .then(()=>{
        success("Signed out successfully!");
      })
      .catch(e=>error("Couldn't sign out. " + e.message));
}