import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";
import {getComments} from "../../../firebase/decks/comments/read/index";

export const fetchDeckComments= ({deckId, uid}) => {
  let deckPromise = new Promise((resolve, reject) => getComments(deckId, resolve, reject, uid));
  return deckPromise.then(deckComments => ({deckComments})).catch(err => ({err: err.message}))
};

export function* fetchDeckCommentsSaga({payload}) {
  const {deckComments, err} = yield call(fetchDeckComments, payload);
  if(err){
    yield put(actions.fetchActiveDeckCommentsFailure(err));
  } else {
    yield put(actions.fetchActiveDeckCommentsSuccess(deckComments));
  }
}

export function* watchDeckComments() {
  yield takeEvery(types.FETCH_ACTIVE_DECK_COMMENTS_REQUEST, fetchDeckCommentsSaga)
}