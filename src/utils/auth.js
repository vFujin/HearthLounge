import {ref, firebaseAuth} from '../keys';

export function createUser(email, pass){
  let promise = firebaseAuth().createUserWithEmailAndPassword(email, pass).then(saveUser);
  promise.catch(e => console.log(e.message));
  return promise;
}

export function logout(){
  return firebaseAuth().signOut();
}

export function signIn(email, pass){
  let promise = firebaseAuth().signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  return promise;
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user){
  return ref.child(`users/${user.uid}`)
      .set({
        email: user.email,
        uid: user.uid
      })
      .then(() => user)
}
