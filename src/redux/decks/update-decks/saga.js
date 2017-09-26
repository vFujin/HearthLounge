import {call, put, takeEvery} from 'redux-saga/effects';
import {getLazyloadDecks} from "../../../firebase/decks/deck/read/index";
import * as actions from "./actions";
import * as types from "./types";

//TODO stop calling requests when the resolved value is the last in db
export const fetchDecksUpdate = () => {
  let deckPromise = new Promise((resolve, reject) => getLazyloadDecks(resolve, reject));
  return deckPromise.then(decks => ({decks})).catch(err => ({updateErr: err.message}))
};

export function* fetchDecksUpdateSaga() {
  const {decks, updateErr} = yield call(fetchDecksUpdate);
  if(updateErr){
    yield put(actions.fetchDecksUpdateFailure(updateErr));
  } else {
    yield put(actions.fetchDecksUpdateSuccess(decks));
  }
}

export function* watchDecksUpdate() {
  yield takeEvery(types.UPDATE_DECKS_REQUEST, fetchDecksUpdateSaga)
}