import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "../../types/reddit";
import * as actions from "../../actions/reddit/post";

export const fetchRedditPost = id => axios.get(`https://www.reddit.com/r/hearthstone/comments/${id}.json`)
    .then(({data}) => {
      return {
        activePost: {
          post: data[0].data.children[0].data,
          comments: {
            all: data[1].data.children.map(obj => obj.data)
          }
        }
      }
    })
    .catch(error => ({error}));

export function* fetchRedditPostSaga({payload}) {
  const {activePost, error} = yield call(fetchRedditPost, payload);
  if(error){
    yield put(actions.fetchRedditPostFailure(error));
  } else {
    yield put(actions.fetchRedditPostSuccess(activePost));
  }
}

export function* watchRedditPost() {
  yield takeEvery(types.FETCH_REDDIT_POST_REQUEST, fetchRedditPostSaga)
}