import {call, put, takeEvery} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {firebaseAuth} from "../../../keys";
import {error, success} from "../../../utils/messages";
import * as types from "../types";
import * as actions from '../actions/reset-password.action';

export const firebaseResetPassword = (email) => {
  return firebaseAuth()
      .sendPasswordResetEmail(email)
      .then(() => ({resetPassword: true}))
      .catch(err => ({err: err.message}))
};

export function* firebaseResetPasswordSaga({payload}) {
  const {resetPassword, err} = yield call(firebaseResetPassword, payload);

  if (resetPassword) {
    yield put(actions.firebaseResetPasswordSuccess(resetPassword));
    yield success('Email sent!');
    yield put(push('/sign-in'));
  } else {
    yield put(actions.firebaseResetPasswordError(err));
    yield error(err);
  }
}

export function* watchFirebaseResetPassword() {
  yield takeEvery(types.FIREBASE_RESET_PASSWORD_REQUEST, firebaseResetPasswordSaga);
}