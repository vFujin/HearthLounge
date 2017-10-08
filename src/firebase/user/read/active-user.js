import {refParent, firebaseAuth, firestore} from '../../../keys';

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
  const docRef = firestore.collection('users').doc(uid);
  docRef.get().then(doc => {
    if(doc.exists){
      callback(doc.data());
    }
  }).catch(err =>console.log(err));
  // return refParent('users').on("value", (snapshot) => callback(snapshot.child(uid).val()))
}