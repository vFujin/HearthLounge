import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";

export const fetchRedditPosts = (category) => axios.get(`https://www.reddit.com/r/hearthstone/${category || 'top'}.json`)
        .then(({data}) => ({posts: data.data.children.map(obj => obj.data)})).catch(error => ({error}));

export function* fetchRedditPostsSaga({payload}) {
  const {posts, error} = yield call(fetchRedditPosts, payload);
  if(error){
    yield put(actions.fetchRedditPostsFailure(error));
  } else {
    yield put(actions.fetchRedditPostsSuccess(posts));
  }
}

export function* watchRedditPosts() {
  yield takeEvery(types.FETCH_REDDIT_POSTS_REQUEST, fetchRedditPostsSaga)
}