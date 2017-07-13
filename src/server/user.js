import {ref, firebaseAuth, firebaseStorage} from '../keys';
import {browserHistory} from 'react-router';
import {success, error} from '../utils/messages';



export function getUserData(uid, callback) {
  return ref.on("value", (snapshot) =>callback(snapshot.child(`users/${uid}`).val()))
}

export function getCurrentUserInfo(reducer){
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      getUserData(user.uid, (v)=> {
        reducer(true, v)
      });
    } else {
      reducer(false, null);
    }
  });
}