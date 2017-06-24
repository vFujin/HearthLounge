import firebase from 'firebase';
export const TwitchClientId = "";
export const MashapeKey = '';
export const FirebaseConfig = {
};
firebase.initializeApp(FirebaseConfig);
export const refParent = (parent) => {
  return firebase.database().ref(parent);
};
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const firebaseStorage = firebase.storage;