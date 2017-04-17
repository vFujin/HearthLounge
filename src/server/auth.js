import {ref, firebaseAuth} from '../keys';
import {browserHistory} from 'react-router';
import _ from 'lodash';
export function createUser(email, pass, username, callback){

  let promise = firebaseAuth().createUserWithEmailAndPassword(email, pass).then(user=>saveUser(user, username));
  promise.catch(e => callback(e.message));
  return promise;
}

export function logout(e){
  e.preventDefault();
  return firebaseAuth().signOut()
      .then(()=>browserHistory.push('/forum'))
      .catch(e=>console.log(e.message));
}

export function signIn(email, pass, cb){

  return firebaseAuth().signInWithEmailAndPassword(email, pass)
      .then(()=>browserHistory.push('/dashboard'))
      .catch(e=>{
        let m = e.message;
        console.log(m);
        return cb(m)
      });
}

// export function resetPassword(email) {
//   return firebaseAuth().sendPasswordResetEmail(email);
// }

function saveUser(user, username){
  return ref.child(`users/${user.uid}`)
      .set({
        email: user.email,
        username: username.toLowerCase(),
        role: 'user'
      })
      .then(()=>user)
}

export function getUserData(uid, cb) {
  return ref.once("value", (snapshot) =>cb(snapshot.child(`users/${uid}`).val()))
}