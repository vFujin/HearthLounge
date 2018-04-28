import {firestore} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";
import {updateActiveDeckCopy} from "../active-deck-copy/actions";
import {fetchDeckAuthorRequest} from "../deck-author/actions";

export const fetchActiveDeck = (deckId) => {
  let deckRef = firestore.collection('decks').doc(deckId).get();

  return deckRef.then(activeDeck => {
    if(activeDeck.exists){
      return ({activeDeck: activeDeck.data()})
    }
    return ({err: "Deck does not exist"})
  }).catch(err => ({err: err.message}))
};

export function* fetchActiveDeckSaga({payload}) {
  const {activeDeck, err} = yield call(fetchActiveDeck, payload);
  if(err) {
    yield put(actions.fetchActiveDeckFailure(err));
  } else {
    yield put(actions.fetchActiveDeckSuccess(activeDeck));
    yield put(updateActiveDeckCopy(activeDeck));
    yield put(fetchDeckAuthorRequest(activeDeck.authorId))
  }
}

export function* watchActiveDeck() {
  yield takeEvery(types.FETCH_ACTIVE_DECK_REQUEST, fetchActiveDeckSaga)
}