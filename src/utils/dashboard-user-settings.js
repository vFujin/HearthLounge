import {ref, firebaseAuth} from '../keys';

export function updateEmail(email){
  let user = firebaseAuth().currentUser;
  user.updateEmail(email)
}

export function updateUserHearthstoneData(uid, battletag, favourite_class, region){
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

