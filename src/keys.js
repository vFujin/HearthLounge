import firebase from 'firebase';
import 'firebase/firestore';

export const TwitchClientId = "jupouny3vvr7kl38jlsj7ssnyww80z";
export const MashapeKey = 'T15rGIqg2lmshwDGMsX3mZeWM7vBp1ZmfvVjsnFba6SXP2WK5Q';
export const calendarKey = "AIzaSyDvwuwYmeMn2RP496TvxIaGM5GLG1-2zvc";
export const calendarId = "kvaverirkumds90dnen1jlmmq0dcvgom%40import.calendar.google.com";
export const FirebaseConfig = {
  apiKey: "AIzaSyC0llLdIXWVVcVkMc3r1sF_OpwrxctXe58",
  authDomain: "hearthlounge-32197.firebaseapp.com",
  databaseURL: "https://hearthlounge-32197.firebaseio.com",
  projectId: "hearthlounge-32197",
  storageBucket: "hearthlounge-32197.appspot.com",
  messagingSenderId: "313812762792"
};

firebase.initializeApp(FirebaseConfig);

export const refParent = (parent) => {
  return firebase.database().ref(parent);
};

export const ref = firebase.database().ref();
export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth;