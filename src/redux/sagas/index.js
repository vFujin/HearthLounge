import {all} from 'redux-saga/effects';
import {watchPatch} from "./current-hs-patch.saga";
import {watchRedditPosts} from "./reddit-posts.saga";

export default function* rootSaga(){
  yield all([
      watchPatch(),
      watchRedditPosts()
  ]);
}