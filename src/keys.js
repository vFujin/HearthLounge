import firebase from 'firebase';
export const TwitchClientId = "<YOUR TWITCH CLIENT ID>"
export const MashapeKey = "<YOUR MASHAPE KEY>" //or this one https://rapidapi.com/user/omgvamp/package/Hearthstone 
                                               //as mashape? switched from Mashape to RapidAPI 
export const FirebaseConfig = { <YOUR FIREBASE CONFIG OBJECT> }
firebase.initializeApp(FirebaseConfig);
export const refParent = (parent) => {
  return firebase.database().ref(parent);
};
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
