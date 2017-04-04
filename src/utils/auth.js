import {ref, firebaseAuth} from '../keys';
import {browserHistory} from 'react-router';
export function createUser(email, pass){
  let promise = firebaseAuth().createUserWithEmailAndPassword(email, pass).then(saveUser);
  promise.catch(e => console.log(e.message));
  return promise;
}

export function logout(e){
  e.preventDefault();
  browserHistory.push('/forum');
  return firebaseAuth().signOut();
}

export function signIn(email, pass){
  let promise = firebaseAuth().signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(promise, e.message));
  return promise;
}

// export function resetPassword(email) {
//   return firebaseAuth().sendPasswordResetEmail(email);
// }

function saveUser(user){
  return ref.child(`users/${user.uid}`)
      .set({
        email: user.email,
        uid: user.uid
      })
      .then(() => user)
}
