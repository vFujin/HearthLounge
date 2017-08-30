import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {MashapeKey} from "../../keys";
import * as actions from '../actions/current-hs-patch';
import * as types from '../types/current-hs-patch';
const fetchPatch = () => axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/info', {
  headers: {
    'X-Mashape-Key': MashapeKey
  }
}).then(({ data }) => data.patch).catch(error => ({ error }));

export function* fetchPatchSaga() {
  const {patch, error} = yield call(fetchPatch);
  if (error) {
    yield put(actions.fetchPatchFailure(error));
  } else {
    yield put(actions.fetchPatchSuccess(patch));
  }
}

export function* watchPatch() {
  yield takeEvery(types.FETCH_PATCH_REQUEST, fetchPatchSaga());
}