import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";

export const fetchRedditPost = id => axios.get(`https://www.reddit.com/r/hearthstone/comments/${id}.json`)
    .then(({data}) => {
      return {
          post: data[0].data.children[0].data,
          comments: {
            all: data[1].data.children.map(obj => obj.data)
          }

      }
    })
    .catch(error => ({error}));

export function* fetchRedditPostSaga({payload}) {
  const {post, comments, error} = yield call(fetchRedditPost, payload);
  if(error){
    yield put(actions.fetchRedditPostFailure(error));
  } else {
    yield put(actions.fetchRedditPostSuccess({post, comments}));
  }
}

export function* watchRedditPost() {
  yield takeEvery(types.FETCH_REDDIT_POST_REQUEST, fetchRedditPostSaga)
}