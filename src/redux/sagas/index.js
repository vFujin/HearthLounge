import {all} from 'redux-saga/effects';
import {watchPatch} from "./current-hs-patch.saga";
import {watchRedditPosts} from "./reddit-posts.saga";
import {watchFirebaseSignIn} from "./firebase/user/utils/sign-in.saga";
import {watchFirebaseSignOut} from "./firebase/user/utils/sign-out.saga";
import {watchFirebaseReauthenticate} from "./firebase/user/utils/reauthenticate.saga";
import {watchFirebaseResetPassword} from "./firebase/user/utils/reset-password.saga";

export default function* rootSaga(){
  yield all([
      watchPatch(),
      watchRedditPosts(),

      //Firebase
      watchFirebaseSignIn(),
      watchFirebaseSignOut(),
      watchFirebaseReauthenticate(),
      watchFirebaseResetPassword()
  ]);
}