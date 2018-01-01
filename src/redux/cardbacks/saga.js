import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";
import {MashapeKey} from "../../keys";

export const fetchCardbacks = () => axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks`, {
  headers: {'X-Mashape-Key': MashapeKey}
}).then(({data}) => ({cardbacks: data})).catch(error => ({error}));

export function* fetchCardBacksSaga({payload}) {
  const {cardbacks, error} = yield call(fetchCardbacks, payload);
  if(error){
    yield put(actions.fetchCardbacksFailure(error.message));
  } else {
    yield put(actions.fetchCardsbacksSuccess(cardbacks));
  }
}

export function* watchCardbacks() {
  yield takeEvery(types.FETCH_CARDBACKS_REQUEST, fetchCardBacksSaga)
}