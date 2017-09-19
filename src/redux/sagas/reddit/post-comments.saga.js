import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "../../types/reddit";
import * as actions from "../../actions/reddit/comments";

export const fetchRedditPostComments = id => axios.get(`https://www.reddit.com/r/hearthstone/comments/${id}.json`)
    .then(({data}) => ({comments: data[1].data.children.map(obj => obj.data)}))
    .catch(error => ({error}));

export function* fetchRedditPostCommentsSaga({payload}) {
  const {comments, error} = yield call(fetchRedditPostComments, payload);
  if(error){
    yield put(actions.fetchRedditPostCommentsFailure(error));
  } else {
    yield put(actions.fetchRedditPostCommentsSuccess(comments));
  }
}

export function* watchRedditPostComments() {
  yield takeEvery(types.FETCH_REDDIT_POST_COMMENTS_REQUEST, fetchRedditPostCommentsSaga)
}