import {firestore} from "../../../keys";
import {call, put, takeEvery} from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./types";
import {subDays, startOfWeek} from "date-fns";

export const fetchHotDecks = () => {
  const now = +Date.now();
  const twoWeeks = +startOfWeek(subDays(now, 14));

  let decksRef = firestore.collection("decks").where("created", ">=", twoWeeks).limit(10).get();
  return decksRef
      .then(querySnapshot => {
        const decks = [];
        querySnapshot.forEach(deck => decks.push(deck.data()));
        return {decks};
      })
      .catch(err => ({err: err.message}))
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