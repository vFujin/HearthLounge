import firebase from 'firebase';
export const TwitchClientId = "<Your Twitch Client id>"; //https://dev.twitch.tv/docs#getting-started
export const MashapeKey = '<Your Mashape key>'; //https://market.mashape.com/omgvamp/hearthstone
export const FirebaseConfig = { //Your Firebase Config
  
};
firebase.initializeApp(FirebaseConfig);
export const refParent = (parent) => {
  return firebase.database().ref(parent);
};
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const firebaseStorage = firebase.storage;
