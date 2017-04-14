import {ref, firebaseAuth} from '../keys';
// import {getUserData} from './auth';

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