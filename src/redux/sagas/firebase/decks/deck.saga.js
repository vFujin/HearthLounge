import {call, put, takeEvery} from 'redux-saga/effects';
import {getDeckDetails} from "../../../../firebase/decks/deck/read/index";
import * as actions from "../../../actions/decks/deck";
import * as types from "../../../types/decks/deck-view";

export const fetchDeck = (deckId) => {
  let deckPromise = new Promise((resolve, reject) => getDeckDetails(deckId, resolve, reject));
  return deckPromise.then(activeDeck => ({activeDeck})).catch(err => ({err: err.message}))
};

export function* fetchDeckSaga({payload}) {
  const {activeDeck, err} = yield call(fetchDeck, payload);
  if(err){
    yield put(actions.fetchDeckFailure(err));
  } else {
    yield put(actions.fetchDeckSuccess(activeDeck));
  }
}

export function* watchDeck() {
  yield takeEvery(types.FETCH_DECK_REQUEST, fetchDeckSaga)
}