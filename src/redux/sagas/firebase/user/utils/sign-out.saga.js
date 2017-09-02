import {call, put, takeEvery} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {firebaseAuth} from "../../../../../keys";
import {error, success} from "../../../../../utils/messages";
import * as types from "../../../../types/firebase";
import * as actions from '../../../../actions/firebase/user/utils/sign-out.action';

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
    yield put(push('/'));
  } else {
    yield put(actions.firebaseSignOutError(err));
    yield error(err);
  }
}

export function* watchFirebaseSignOut() {
  yield takeEvery(types.FIREBASE_SIGN_OUT_REQUEST, firebaseSignOutSaga);
}