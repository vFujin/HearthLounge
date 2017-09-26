import {all} from 'redux-saga/effects';
import {watchPatch} from "../patch/saga";
import {watchRedditPosts} from "../reddit/posts/saga";
import {watchFirebaseSignIn} from "./firebase/user/utils/sign-in.saga";
import {watchFirebaseSignOut} from "./firebase/user/utils/sign-out.saga";
import {watchFirebaseReauthenticate} from "./firebase/user/utils/reauthenticate.saga";
import {watchFirebaseResetPassword} from "./firebase/user/utils/reset-password.saga";
import {watchDecks} from "../decks/fetch-decks/saga";
import {watchHotDecks} from "../decks/home-decks/saga";
import {watchCards} from "../cards/saga";
import {watchRedditPost} from "../reddit/active-post/saga";
import {watchRedditPostComments} from "../reddit/comments/saga";
import {watchDecksUpdate} from "../decks/update-decks/saga";

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