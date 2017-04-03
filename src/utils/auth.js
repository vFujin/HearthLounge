import {ref, firebaseAuth} from '../keys';

export function createUser(email, pass){
  return firebaseAuth().createUserWithEmailAndPassword(email, pass).then(saveUser)
}

export function logout(){
  return firebaseAuth.signOut();
}

export function login(email, pass){
  return firebaseAuth().signInWithEmailAndPassword(email, pass);
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
