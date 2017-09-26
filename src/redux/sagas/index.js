import {all} from 'redux-saga/effects';
import {watchPatch} from "./current-hs-patch.saga";
import {watchRedditPosts} from "./reddit/posts.saga";
import {watchFirebaseSignIn} from "./firebase/user/utils/sign-in.saga";
import {watchFirebaseSignOut} from "./firebase/user/utils/sign-out.saga";
import {watchFirebaseReauthenticate} from "./firebase/user/utils/reauthenticate.saga";
import {watchFirebaseResetPassword} from "./firebase/user/utils/reset-password.saga";
import {watchDecks} from "./firebase/decks/decks.saga";
import {watchHotDecks} from "./firebase/decks/hot-decks.saga";
import {watchCards} from "./cards.saga";
import {watchRedditPost} from "./reddit/post.saga";
import {watchRedditPostComments} from "./reddit/post-comments.saga";
import {watchDecksUpdate} from "./firebase/decks/decks-update.saga";

import {watchDeckAuthor} from "../deck/deck-author/saga";
import {watchActiveDeck} from "../deck/active-deck/saga";

export default function* rootSaga() {
  yield all([
    //App
    watchPatch(),
    watchCards(),
    //Home
    watchHotDecks(),
    // Decks & Deck page
    watchDecks(),
    watchDecksUpdate(),
    watchActiveDeck(),
    watchDeckAuthor(),
    //Reddit
    watchRedditPosts(),
    watchRedditPost(),
    watchRedditPostComments(),
    //Firebase
    watchFirebaseSignIn(),
    watchFirebaseSignOut(),
    watchFirebaseReauthenticate(),
    watchFirebaseResetPassword(),
  ]);
}