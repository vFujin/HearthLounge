import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";
import api from '../../api/streamers';
import {fetchStreamerSuccess} from "./streamer/actions";

export function* fetchStreamersSaga({payload}) {
  const {streams, activeStreamer, error} = yield call(api.fetchStreamers, payload);

  if(error){
    yield put(actions.fetchStreamersFailure(error));
  } else {
    yield put(actions.fetchStreamersSuccess(streams));
    yield put(fetchStreamerSuccess(activeStreamer));
  }
}

export function* watchStreamers() {
  yield takeEvery(types.FETCH_STREAMERS_REQUEST, fetchStreamersSaga)
}
