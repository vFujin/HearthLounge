import {all} from 'redux-saga/effects';
import {watchPatch} from "./current-hs-patch.saga";
import {watchRedditPosts} from "./reddit/posts.saga";
import {watchFirebaseSignIn} from "./firebase/user/utils/sign-in.saga";
import {watchFirebaseSignOut} from "./firebase/user/utils/sign-out.saga";
import {watchFirebaseReauthenticate} from "./firebase/user/utils/reauthenticate.saga";
import {watchFirebaseResetPassword} from "./firebase/user/utils/reset-password.saga";
import {watchDecks} from "./decks.saga";
import {watchCards} from "./cards.saga";
import {watchRedditPost} from "./reddit/post.saga";
import {watchRedditPostComments} from "./reddit/post-comments.saga";

export default function* rootSaga() {
  yield all([
    watchDecks(),
    watchPatch(),
    watchRedditPosts(),
    watchRedditPost(),
    watchRedditPostComments(),
    watchCards(),
    //Firebase
    watchFirebaseSignIn(),
    watchFirebaseSignOut(),
    watchFirebaseReauthenticate(),
    watchFirebaseResetPassword(),
  ]);
}