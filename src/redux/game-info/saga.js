import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {MashapeKey} from "../../keys";
import * as actions from './actions';
import * as types from './types';
import {setLocalstorage} from "../../utils/localstore";
import {fetchCardsRequest} from "../cards/actions";
import {fetchCardbacksRequest} from "../cardbacks/actions";

export const fetchGameInfo = () => axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/info', {
  headers: {
    'X-Mashape-Key': MashapeKey
  }
}).then(({ data }) => ({data})).catch(error => ({error}));


export function* fetchGameInfoSaga() {
  const {data, error} = yield call(fetchGameInfo);
  if (error) {
    yield put(actions.fetchGameInfoFailure(error));
  } else {
    yield put(actions.fetchGameInfoSuccess(data));

    if (localStorage.hearthloungeGameInfo && (data.patch !== JSON.parse(localStorage.hearthloungeGameInfo).patch)) {
      yield console.log("foo");
      yield put(fetchCardsRequest());
      yield put(fetchCardbacksRequest());
    } else {
      if (!localStorage.hearthloungeGameInfo || data.patch !== JSON.parse(localStorage.hearthloungeGameInfo).patch) {
        yield call(setLocalstorage, "hearthloungeGameInfo", data);
      }
    }
  }
}


export function* watchGameInfo() {
  yield takeEvery(types.FETCH_GAME_INFO_REQUEST, fetchGameInfoSaga);
}