import {firestore} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";

export const fetchDecks = uid => {

  return firestore.collection('decks').where("authorId", "==", uid).get().then(querySnapshot => {
    let decks = [];
    querySnapshot.forEach(doc => decks.push(doc.data()));
    return {decks}
  }).catch(err => ({err: err.message}))
};

export function* fetchDecksSaga({payload}) {
  const {decks, err} = yield call(fetchDecks, payload);
  if(err){
    yield put(actions.fetchActiveUserDecksFailure(err));
  } else {
    yield put(actions.fetchActiveUserDecksSuccess(decks));
  }
}

export function* watchUserDashboardDecks() {
  yield takeEvery(types.FETCH_ACTIVE_USER_DECKS_REQUEST, fetchDecksSaga)
}