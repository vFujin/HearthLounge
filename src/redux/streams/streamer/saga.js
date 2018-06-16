import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "../types";
import * as actions from "./actions";
import api from "../../../api/streamers";

export function* fetchStreamerSaga({payload}) {
  const {streamer, error} = yield call(api.fetchStreamer, payload);

  if(error){
    yield put(actions.fetchStreamerFailure(error));
  } else {
    yield put(actions.fetchStreamerSuccess(streamer));
  }
}

export function* watchStreamer() {
  yield takeEvery(types.FETCH_STREAMER_REQUEST, fetchStreamerSaga)
}
