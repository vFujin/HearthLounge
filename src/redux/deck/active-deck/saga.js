import {call, put, takeEvery} from 'redux-saga/effects';
import {getDeckDetails} from "../../../firebase/decks/deck/read/index";
import * as actions from "./actions";
import * as types from "./types";
// import {fetchDeckAuthor} from "../deck-author/saga";

export const fetchActiveDeck = (deckId) => {
  let deckPromise = new Promise((resolve, reject) => getDeckDetails(deckId, resolve, reject));
  return deckPromise.then(activeDeck => ({activeDeck})).catch(err => ({err: err.message}))
};


export function* fetchActiveDeckSaga({payload}) {
  const {activeDeck, err} = yield call(fetchActiveDeck, payload);
  if(err){
    yield put(actions.fetchActiveDeckFailure(err));
  } else {
    yield put(actions.fetchActiveDeckSuccess(activeDeck));
    // yield call(fetchDeckAuthor, activeDeck.authorId)
  }
}

export function* watchActiveDeck() {
  yield takeEvery(types.FETCH_ACTIVE_DECK_REQUEST, fetchActiveDeckSaga)
}