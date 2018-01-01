import {call, put, takeEvery} from 'redux-saga/effects';
import {firebaseAuth} from "../../../keys";
import {error, success} from "../../../utils/messages";
import * as types from "../types";
import * as actions from '../actions/reauthenticate.action';
import {activeUser} from "../../../utils/active-user";

export const firebaseReauthenticate = (payload) => {
  const {email, password} = payload;
  const credential = firebaseAuth.EmailAuthProvider.credential(email, password);
  return activeUser()
      .reauthenticateWithCredential(credential)
      .then(() => ({reauthenticated: true}))
      .catch(err => ({err: err.message}))
};

export function* firebaseReauthenticateSaga({payload}) {
  const {reauthenticated, err} = yield call(firebaseReauthenticate, payload);

  if (reauthenticated) {
    yield put(actions.firebaseReauthenticateSuccess(reauthenticated));
    yield success('Reauthenticated successfully!');
  } else {
    yield put(actions.firebaseReauthenticateError(err));
    yield error("Couldn't reauthenticate. Try again later.");
  }
}

export function* watchFirebaseReauthenticate() {
  yield takeEvery(types.FIREBASE_REAUTHENTICATE_REQUEST, firebaseReauthenticateSaga);
}