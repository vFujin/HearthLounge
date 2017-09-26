import {call, put, takeEvery} from 'redux-saga/effects';
import {getHotDecks} from "../../../../firebase/decks/deck/read/index";
import * as actions from "../../../actions/decks/hot-decks";
import * as types from "../../../types/decks";

export const fetchHotDecks = () => {
    let deckPromise = new Promise((resolve, reject) => getHotDecks(false, null, false, resolve, reject));
    return deckPromise.then(decks => ({decks})).catch(err => ({err: err.message}))
};

export function* fetchHotDecksSaga() {
  const {decks, err} = yield call(fetchHotDecks);
  if(err){
    yield put(actions.fetchHotDecksFailure(err));
  } else {
    yield put(actions.fetchHotDecksSuccess(decks));
  }
}

export function* watchHotDecks() {
  yield takeEvery(types.FETCH_HOT_DECKS_REQUEST, fetchHotDecksSaga)
}