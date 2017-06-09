import {ref, firebaseAuth} from '../keys';
import {browserHistory} from 'react-router';
import {loading, success, error} from '../utils/messages';

/**
 * Creates new user.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's chosen password.
 * @param {func} callback - Callback function to pass data into reducer.
 * @returns {!firebase.Promise.<*>}
 */
export function createUser(email, password, updateSignUpStatus){
  // Need to figure out how to throw exception when username is taken, since if email is not, user will be created anyway in "main" db
  firebaseAuth().createUserWithEmailAndPassword(email, password)
      .then(()=>{
        updateSignUpStatus("success", null);
        browserHistory.push('/sign-up/update-profile')
      })
      .catch(e => {
        updateSignUpStatus("failure", null);
        error("Couldn't save user. " + e.message)
      });
  // return promise;
}

/**
 * Signs out the current user.
 *
 * @param {func} e - event
 * @returns {any|firebase.Thenable<any>}
 */
export function logout(e){
  e.preventDefault();
  return firebaseAuth().signOut()
      .then(()=>{
        success("Signed out successfully!");
      })
      .catch(e=>error("Couldn't sign out. " + e.message, 4));
}

/**
 * Signs in user and redirects to user dashboard on success.
 *
 * @param {string} email - The user's e-mail address.
 * @param {string} pass - The user's password.
 * @returns {any|firebase.Thenable<any>}
 */
export function signIn(email, pass){
  return firebaseAuth().signInWithEmailAndPassword(email, pass)
      .then(()=>{
        success("Signed in successfully!");
        browserHistory.push('/dashboard')
      })
      .catch(e=>error("Couldn't sign in. " + e.message, 4));
}

// export function resetPassword(email) {
//   return firebaseAuth().sendPasswordResetEmail(email);
// }

/**
 * Saves user to Firebase.
 *
 * @param {object} user - The user's details.
 * @param {string} username - The user's unique username.
 */
export function saveUser(user, username){
  if(user && username){
    const {email, uid} = user;

    let newUser = {
      updatedProfile: false,
      prestige: 1,
      role: 'user',
      email,
      username,
      uid
    };

    let updates = {};
    updates[`users/${uid}`] = newUser;
    updates[`usernames/${username}`] = uid;

    return ref.update(updates);
  }
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