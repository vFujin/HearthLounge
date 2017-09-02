import {refParent, firebaseAuth} from '../../../keys';

/**
 * Reads active user details
 *
 * @param {function} callback - returns active user details
 */
export default function (callback){
  firebaseAuth().onAuthStateChanged(user => {

    console.log(user)
    if (user) {
      getUserData(user.uid, (v)=> callback(true, v));
    } else {
      callback(false, null);
    }
  });
}

function getUserData(uid, callback) {
  return refParent('users').on("value", (snapshot) => callback(snapshot.child(uid).val()))
}