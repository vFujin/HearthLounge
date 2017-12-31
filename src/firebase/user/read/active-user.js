import {refParent, firebaseAuth} from '../../../keys';
import history from '../../../globals/history';
/**
 * Reads active user details
 *
 * @param {function} callback - returns active user details
 */
export default function (callback){
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      return getUserData(user.uid, (v)=> callback(true, v));
    } else {
      callback(false, null);
    }
  });
}

function getUserData(uid, callback) {
  if(history.location.pathname === "/sign-up" || history.location.pathname === "/sign-in") {
    history.push('/dashboard');
  }
  return refParent('users').on("value", (snapshot) => {
    let user = snapshot.child(uid).val();
    callback(user);
  })
}