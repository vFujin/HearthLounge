import {call, put, takeEvery} from 'redux-saga/effects';
import {getDecks} from "../../firebase/decks/deck/read/index";
import * as actions from "../actions/decks/decks";
import * as types from "../types/decks";

export const fetchDecks = () => {
  let deckPromise = new Promise((resolve, reject) => getDecks(false, null, false, resolve, reject));
  return deckPromise.then(decks => {
    return {decks}
  }).catch(err => ({err: err.message}))
};

export function* fetchDecksSaga() {
  const {decks, err} = yield call(fetchDecks);
  if(err){
    yield put(actions.fetchDecksFailure(err));
  } else {
    yield put(actions.fetchDecksSuccess(decks));
  }
}

export function* watchDecks() {
  yield takeEvery(types.FETCH_DECKS_REQUEST, fetchDecksSaga)
}