import firebase from 'firebase';
export const TwitchClientId = ""; //Your twitch.tv key
export const MashapeKey = ''; //Your Mashape key
export const FirebaseConfig = {}; // Your firebase config object
firebase.initializeApp(FirebaseConfig);
export const refParent = (parent) => {
  return firebase.database().ref(parent);
};

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const firebaseStorage = firebase.storage;