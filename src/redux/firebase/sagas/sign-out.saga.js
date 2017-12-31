import {call, put, takeEvery} from 'redux-saga/effects';
import {firebaseAuth} from "../../../keys";
import {error, success} from "../../../utils/messages";
import * as types from "../types";
import * as actions from '../actions/sign-out.action';

export const firebaseSignOut = () => {
  return firebaseAuth()
      .signOut()
      .then(() => ({signedOut: true}))
      .catch(err => ({err: err.message}))
};

export function* firebaseSignOutSaga() {
  const {signedOut, err} = yield call(firebaseSignOut);

  if (signedOut) {
    yield put(actions.firebaseSignOutSuccess(signedOut));
    yield success('Signed out successfully!');
  } else {
    yield put(actions.firebaseSignOutError(err));
    yield error(err);
  }
}

export function* watchFirebaseSignOut() {
  yield takeEvery(types.FIREBASE_SIGN_OUT_REQUEST, firebaseSignOutSaga);
}