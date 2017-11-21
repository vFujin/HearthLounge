import {firestore} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";

export const updateActiveDeck = ({deckId, description, deck, updated}) => {
  const batch = firestore.batch();
  let deckRef = firestore.collection('decks').doc(deckId);
  batch.update(deckRef, {description, deck, updated});
  return batch.commit().then(() => ({activeDeckUpdated: true})).catch(err => ({err: err.message}))
};

export function* updateActiveDeckSaga({payload}) {
  const {activeDeckUpdated, err} = yield call(updateActiveDeck, payload);
  if(err) {
    yield put(actions.updateActiveDeckFailure(err));
  } else {
    yield put(actions.updateActiveDeckSuccess(activeDeckUpdated));
  }
}

export function* watchActiveDeckUpdate() {
  yield takeEvery(types.UPDATE_ACTIVE_DECK_REQUEST, updateActiveDeckSaga)
}