import firebase from 'firebase';
export const TwitchClientId = "<YOUR TWITCH CLIENT ID>"; //https://dev.twitch.tv/docs/v5/guides/using-the-twitch-api
export const MashapeKey = '<YOUR MASHAPE/REDIS KEY';     //https://market.mashape.com/omgvamp/hearthstone
export const FirebaseConfig = { <YOUR FIREBASE CONFIG OBJECT> }; //https://console.firebase.google.com/u/0/ 
firebase.initializeApp(FirebaseConfig);
export const refParent = (parent) => {
  return firebase.database().ref(parent);
};
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const firebaseStorage = firebase.storage;
