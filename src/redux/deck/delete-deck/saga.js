import {refParent, firestore} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import {browserHistory} from 'react-router';
import * as actions from "./actions";
import * as types from "./types";
import {updateActiveDeckCopy} from "../active-deck-copy/actions";
import {success} from "../../../utils/messages";
import {fetchActiveDeckSuccess} from "../active-deck/actions";

export const deleteDeck = (deckId) => {
  let deckRef = firestore.collection('decks').doc(deckId).delete();

  return deckRef.then(() => {
    return refParent(`deck-comments/${deckId}`)
      .remove()
      .then(()=> ({success: 200}))
      .catch(err => ({err: err.message}));
  }).catch(err => ({err: err.message}))
};

export function* deleteDeckSaga({payload}) {
  const {err} = yield call(deleteDeck, payload);
  if(err) {
    yield put(actions.deleteDeckFailure(err));
  } else {
    yield put(actions.deleteDeckSuccess());
    yield put(fetchActiveDeckSuccess(''));
    yield put(updateActiveDeckCopy(''));
    yield browserHistory.push('/decks');
    yield success("Successfully deleted deck");
  }
}

export function* watchDeckDeletion() {
  yield takeEvery(types.DELETE_DECK_REQUEST, deleteDeckSaga)
}