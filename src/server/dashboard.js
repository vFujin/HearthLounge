import {ref, firebaseAuth} from '../keys';

export function updateEmail(email){
  let user = firebaseAuth().currentUser;
  user.updateEmail(email)
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

