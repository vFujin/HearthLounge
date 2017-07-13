import {ref, firebaseAuth} from '../../../keys';

/**
 * Reads active user details
 *
 * @param {function} callback - returns active user details
 */
export default function (callback){
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      getUserData(user.uid, (v)=> {
        callback(true, v)
      });
    } else {
      callback(false, null);
    }
  });
}

export function getUserData(uid, callback) {
  return ref.on("value", (snapshot) =>callback(snapshot.child(`users/${uid}`).val()))
}