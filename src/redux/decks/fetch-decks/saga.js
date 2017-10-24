import {firestore} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import {getLazyloadDecks} from "../../../firebase/decks/deck/read/index";
import * as actions from "./actions";
import * as types from "./types";

export const fetchDecks = () => {

  return firestore.collection('decks').get().then(querySnapshot => {
    let decks = [];
    querySnapshot.forEach(doc => decks.push(doc.data()));
    return {decks}
  }).catch(err => ({err: err.message}))
};

export function* fetchDecksSaga() {
  const {decks, err} = yield call(fetchDecks);
  console.log("foo", decks, err);
  if(err){
    yield put(actions.fetchDecksFailure(err));
  } else {
    yield put(actions.fetchDecksSuccess(decks));
  }
}

export function* watchDecks() {
  yield takeEvery(types.FETCH_DECKS_REQUEST, fetchDecksSaga)
}