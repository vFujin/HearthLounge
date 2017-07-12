import {ref, firebaseStorage, firebaseAuth} from '../keys';
import {success, error} from '../utils/messages';
import {browserHistory} from 'react-router';

export function updateEmail(email){
  let user = firebaseAuth().currentUser;
  user.updateEmail(email)
}

export function deleteAvatar(activeUser){
  return ref.child(`users/${activeUser.uid}`).update({...activeUser, photoURL: null})
    .then(()=> success("Avatar has been deleted successfully!"),
      (err)=>{
        error("Couldn't delete avatar. Try again later.");
        console.log(err.message)
      }
    );
}

export function deleteUser(activeUser){
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
  if(activeUser.photoURL){
    firebaseStorage().child(uid).delete().then(()=>{

    })
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

export function reauthenticate(password){
  let user = firebaseAuth().currentUser;
  let credential = firebaseAuth.EmailAuthProvider.credential(user.email, password);
  user.reauthenticateWithCredential(credential).then( ()=> {
    success("You have been reauthenticated successfully!");
  }, ()=>{
    error("Couldn't reauthenticate. Try again later.")
  })
}


export function updateUserHearthstoneData(uid, battletag, favourite_class, region){
  console.log(uid);
  return ref.child(`users/${uid}`).update({
    battletag,
    favourite_class,
    region
  });
}

export function updateUserSocialMediaData(uid, facebook, twitter, twitch, youtube){
  return ref.child(`users/${uid}`).update({
    facebook,
    twitter,
    twitch,
    youtube
  });
}

export function getUserDecks(uid, callback){
  return ref.child(`user-decks/${uid}`).once("value", snapshot=>{
    callback(snapshot.value());
  })
}

export function getUserDeckComments(uid, callback){
  return ref.child(`user-deck-comments/${uid}`).once("value", snapshot=>{
    callback(snapshot.value());
  })
}

export function getUserDeckCommentRatings(uid, callback){
  return ref.child(`user-deck-comments-ratings/${uid}`).once("value", snapshot=>{
    callback(snapshot.value());
  })
}

export function getUserData(entity, uid){
  ref.child(`${entity}/${uid}`).remove()
      .then(()=>console.log(`User ${uid} entity ${entity} has been deleted`),
          (err)=>console.log(`Couldn't delete user ${uid} ${entity} entity. ${err.message}`));
}

