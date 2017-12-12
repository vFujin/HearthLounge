import {firestore} from "../../../keys";
import {call, put, takeEvery} from "redux-saga/effects";
import _ from 'lodash';
import * as actions from "./actions";
import * as types from "./types";
import {subDays, startOfWeek} from "date-fns";

export const fetchHotDecks = ({payload}) => {
  const now = +Date.now();
  const twoWeeks = +startOfWeek(subDays(now, 14));
  const filterKeys = _.keys(payload);
  const filtersLength = filterKeys.length;
  const collection = firestore.collection("decks");

  if(!filtersLength || filtersLength === undefined){
    return collection
      .where("created", ">=", twoWeeks)
      .limit(10)
      .get()
      .then(querySnapshot => {
        const decks = [];
        querySnapshot.forEach(deck => decks.push(deck.data()));
        return {decks};
      })
      .catch(err => ({err: err.message}));
  }
  if(payload && filtersLength === 1){
    const filter = Object.entries(payload)[0];
    const filterKey = filter[0];
    const filterValue = filter[1];

    console.log(Object.entries(payload), filterKey, filterValue);

    return collection
      .where(filterKey, "==", filterValue)
      // .where("votes", ">", 0)
      .limit(10)
      .get()
      .then(querySnapshot => {
        const decks = [];
        querySnapshot.forEach(deck => decks.push(deck.data()));
        return {decks};
      })
      .catch(err => ({err: err.message}));
  }

};

export function* fetchHotDecksSaga(payload) {
  const {decks, err} = yield call(fetchHotDecks, payload);
  if(err){
    yield put(actions.fetchHotDecksFailure(err));
  } else {
    yield put(actions.fetchHotDecksSuccess(decks));
  }
}

export function* watchHotDecks() {
  yield takeEvery(types.FETCH_HOT_DECKS_REQUEST, fetchHotDecksSaga)
}