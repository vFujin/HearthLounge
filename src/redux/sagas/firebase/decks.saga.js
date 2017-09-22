import {call, put, takeEvery} from 'redux-saga/effects';
import {getLazyloadDecks} from "../../../firebase/decks/deck/read/index";
import * as actions from "../../actions/decks/decks";
import * as types from "../../types/decks";

export const fetchDecks = () => {
  let deckPromise = new Promise((resolve, reject) => getLazyloadDecks(resolve, reject));
  return deckPromise.then(decks => ({decks})).catch(err => ({err: err.message}))
};

//end rest of the rewriting to hotDecks and do new Decks saga for decks page

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