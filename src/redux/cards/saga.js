import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";
import {MashapeKey} from "../../keys";

export const fetchCards = () => axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1`, {
  headers: {'X-Mashape-Key': MashapeKey}
}).then(({data}) => ({cards: data})).catch(error => ({error}));

export function* fetchCardsSaga({payload}) {
  const {cards, error} = yield call(fetchCards, payload);
  console.log(cards);
  if(error){

    yield put(actions.fetchCardsFailure(error.message));
  } else {
    yield put(actions.fetchCardsSuccess(cards));
  }
}

export function* watchCards() {
  yield takeEvery(types.FETCH_CARDS_REQUEST, fetchCardsSaga)
}