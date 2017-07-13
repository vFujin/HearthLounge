import {ref, firebaseAuth} from '../../../keys';
import {success, error} from '../../../utils/messages';
import {browserHistory} from 'react-router';

/**
 * Deletes user from main db(only if user is currently logged in and after successful reauthentication)
 *
 * @param {object} activeUser - Currently logged user
 */
export default function (activeUser){
  let user = firebaseAuth().currentUser;
  let uid = user.uid;

  getUserData('users', uid);
  getUserData('user-decks', uid);
  getUserData('user-deck-ratings', uid);
  getUserData('user-deck-comments', uid);
  getUserData('user-deck-comment-ratings', uid);

  if(activeUser.username !== activeUser.email) {
    getUserData('usernames', activeUser.username)
  }

  user.delete().then(()=>{
        success("Account has been deleted!");
        browserHistory.push('/adventures');
      },
      (err) =>{
        console.log(err);
        error("Couldn't delete account. Try again later.");
      });
}

/**
 * Deletes User's data from secondary db (realtime database)
 *
 * @param {string} entity - Db entity (i.e `users`)
 * @param {string} uid - User ID
 */
export function getUserData(entity, uid){
  ref.child(`${entity}/${uid}`).remove()
      .then(()=>console.log(`User ${uid} entity ${entity} has been deleted`),
          (err)=>console.log(`Couldn't delete user ${uid} ${entity} entity. ${err.message}`));
}