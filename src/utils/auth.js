import {ref, firebaseAuth} from '../keys';
import {browserHistory} from 'react-router';

export function createUser(email, pass, username){
  let promise = firebaseAuth().createUserWithEmailAndPassword(email, pass).then(user=>saveUser(user, username));
  promise.catch(e => console.log(e.message));
  return promise;
}

export function logout(e){
  e.preventDefault();
  return firebaseAuth().signOut()
      .then(()=>browserHistory.push('/forum'))
      .catch(e=>console.log(e.message));
}

export function signIn(email, pass){
  return firebaseAuth().signInWithEmailAndPassword(email, pass)
      .then(()=>browserHistory.push('/dashboard'))
      .catch(e=>console.log(e.message));
}

// export function resetPassword(email) {
//   return firebaseAuth().sendPasswordResetEmail(email);
// }

function saveUser(user, username){
  return ref.child(`users/${user.uid}`)
      .set({
        email: user.email,
        uid: user.uid,
        username: username.toLowerCase()
      })
      .then(() => ref.child(`usernames`)
          .set({
            [username]: user.uid
          }))
      .then(()=>user)
}

export function getUserData(uid, cb) {
  return ref.once("value", (snapshot) =>cb(snapshot.child(`users/${uid}`).val()))
}
