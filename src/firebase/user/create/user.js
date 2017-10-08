import {ref, firebaseAuth, firestore} from '../../../keys';
import {success, error} from '../../../utils/messages';
import {browserHistory} from 'react-router';

/**
 * Creates new user.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's chosen password.
 * @param {func} updateSignUpStatus - Callback function to pass data into signUpStatus reducer.
 * @param {func} reducer - Callback function to pass data into activeUser reducer.
 * @returns {!firebase.Promise.<*>}
 */
export default function (email, password, updateSignUpStatus, reducer){
  firebaseAuth().createUserWithEmailAndPassword(email, password)
      .then((user)=>{
        updateSignUpStatus("success", null);
        reducer(true, {
          username: user.email,
          email: user.email,
          uid: user.uid,
          updatedProfile: false,
          rank: 1,
          role: 'user'
        });
        browserHistory.push('/sign-up/update-profile');
        saveUser(user);
      })
      .catch(e => {
        updateSignUpStatus("failure", null);
        error("Couldn't save user. " + e.message)
      });
}

// export function resetPassword(email) {
//   return firebaseAuth().sendPasswordResetEmail(email);
// }

/**
 * Saves user to Firebase.
 *
 * @param {object} user - The user's details.
 */
export function saveUser(user){
  if(user){
    const {email, uid} = user;

    let newUser = {
      updatedProfile: false,
      rank: 1,
      role: 'user',
      username: email,
      email,
      uid
    };

    // let updates = {};
    // updates[`users/${uid}`] = newUser;
    //
    // return ref.update(updates);

    firestore.collection("users").doc(uid).set(newUser).then(() => console.log("success")).catch(err=>console.log(err));
  }
}