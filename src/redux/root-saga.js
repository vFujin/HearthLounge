import {all} from 'redux-saga/effects';
import {watchGameInfo} from "./game-info/saga";
import {watchRedditPosts} from "./reddit/posts/saga";
import {watchFirebaseSignIn} from "./firebase/sagas/sign-in.saga";
import {watchFirebaseSignOut} from "./firebase/sagas/sign-out.saga";
import {watchFirebaseReauthenticate} from "./firebase/sagas/reauthenticate.saga";
import {watchFirebaseResetPassword} from "./firebase/sagas/reset-password.saga";
import {watchDecks} from "./decks/fetch-decks/saga";
import {watchHotDecks} from "./decks/home-decks/saga";
import {watchCards} from "./cards/saga";

import {watchRedditPost} from "./reddit/active-post/saga";
import {watchRedditPostComments} from "./reddit/comments/saga";
import {watchDecksUpdate} from "./decks/update-decks/saga";

import {watchDeckAuthor} from "./deck/deck-author/saga";
import {watchActiveDeck} from "./deck/active-deck/saga";
import {watchDeckComments} from "./deck/comments/fetch-comments/saga";
import {watchDeckCommentPostingStatus} from "./deck/comments/post-comment/saga";
import {watchUserShortenedDetails} from "./user/shortened-details/saga";
import {watchActiveDeckUpdate} from "./deck/active-deck-editing/saga";
import {watchDeckCommentDeletingStatus} from "./deck/comments/delete-comment/saga";
import {watchUserDashboardDecks} from "./user/active-user-dashboard-decks/saga";
import {watchDeckDeletion} from "./deck/delete-deck/saga";
import {watchCardbacks} from "./cardbacks/saga";
import {watchAllUsers} from "./user/all-users/saga";

export default function* rootSaga() {
  yield all([
    //App
    watchGameInfo(),
    watchCards(),
    watchCardbacks(),
    //Home
    watchHotDecks(),
    // Decks & Deck page
    watchDecks(),
    watchDecksUpdate(),
    watchActiveDeck(),
    watchDeckAuthor(),
    watchActiveDeckUpdate(),
    watchDeckComments(),
    watchDeckCommentPostingStatus(),
    watchDeckCommentDeletingStatus(),
    watchDeckDeletion(),
    //Reddit
    watchRedditPosts(),
    watchRedditPost(),
    watchRedditPostComments(),
    //Firebase - Utils
    watchFirebaseSignIn(),
    watchFirebaseSignOut(),
    watchFirebaseReauthenticate(),
    watchFirebaseResetPassword(),
    //Firebase - User
    watchUserShortenedDetails(),
    watchUserDashboardDecks(),
    watchAllUsers()
  ]);
}