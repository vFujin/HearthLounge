import {ref, firebaseAuth} from '../keys';
import {browserHistory} from 'react-router';
export function createUser(email, pass, username, callback){
  let promise = firebaseAuth().createUserWithEmailAndPassword(email, pass).then(user=>saveUser(user, username));
  promise.catch(e => callback(e.message));
  return promise;
}

/**
 * Function representing logout
 * @param {func} e - event
 * @returns {any|firebase.Thenable<any>}
 */
export function logout(e){
  e.preventDefault();
  return firebaseAuth().signOut()
      .then(()=>browserHistory.push('/forum'))
      .catch(e=>console.log(e.message));
}

/**
 * Function representing Sign In.
 * @param {string} email - user e-mail
 * @param {string} pass - user password
 * @param {func} cb - callback
 * @returns {any|firebase.Thenable<any>}
 */
export function signIn(email, pass, cb){
  return firebaseAuth().signInWithEmailAndPassword(email, pass)
      .then(()=>browserHistory.push('/dashboard'))
      .catch(e=>{
        let m = e.message;
        return cb(m)
      });
}

// export function resetPassword(email) {
//   return firebaseAuth().sendPasswordResetEmail(email);
// }

/**
 * Function representing user saving to Firebase
 * @param {object} user - user details
 * @param {string} username - unique username
 */
function saveUser(user, username){
  return ref.child(`users/${user.uid}`)
      .set({
        email: user.email,
        username: username.toLowerCase(),
        role: 'user',
        uid: user.uid
      })
      .then(()=>user)
}

export function getUserData(uid, cb) {
  return ref.once("value", (snapshot) =>cb(snapshot.child(`users/${uid}`).val()))
}

export function getCurrentUserInfo(reducer){
  firebaseAuth().onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      getUserData(user.uid, (v)=>{
        reducer(true, v);
      });
    }
    else {
      reducer(false, null);
    }
  });
}