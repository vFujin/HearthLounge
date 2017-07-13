import {ref, firebaseAuth} from '../../../keys';
import {success, error} from '../../../utils/messages';
import {browserHistory} from 'react-router';

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

export function getUserData(entity, uid){
  ref.child(`${entity}/${uid}`).remove()
      .then(()=>console.log(`User ${uid} entity ${entity} has been deleted`),
          (err)=>console.log(`Couldn't delete user ${uid} ${entity} entity. ${err.message}`));
}