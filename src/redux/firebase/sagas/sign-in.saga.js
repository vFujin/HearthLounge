import {call, put, takeEvery} from 'redux-saga/effects';
import {firebaseAuth, refParent} from "../../../keys";
import history from '../../../globals/history';
import {error, success} from "../../../utils/messages";
import * as types from "../types";
import * as actions from '../actions/sign-in.action';
import {firebaseSignOutSaga} from "./sign-out.saga";

export const firebaseSignIn = (payload) => {
  const {email, pass} = payload;
  return firebaseAuth()
      .signInWithEmailAndPassword(email, pass)
      .then((activeUser) => ({activeUserId: activeUser.uid}))
      .catch(err => ({err: err.message}))
};

export const firebaseLoadUserData = (uid) =>{
  const userPromise = new Promise((resolve, reject) => {
    return refParent('users').on("value", (snapshot) => {
      if(snapshot) {
        resolve(snapshot.child(uid).val())
      } else {
        reject(`Couldn't get ${uid} data.`)
      }
    });
  });
  return userPromise.then((activeUser) => ({activeUser})).catch(err => ({err}));
};

export function* firebaseSignInSaga({payload}) {
  const {activeUserId, err} = yield call(firebaseSignIn, payload);
  if (activeUserId) {
    const {activeUser, err} = yield call(firebaseLoadUserData, activeUserId);

    if(activeUser) {
      yield put(actions.firebaseSignInSuccess(activeUser));
      yield success('Signed in Successfully!');
      yield history.push('/dashboard');
    } else {
      yield firebaseSignOutSaga();
      yield put(actions.firebaseSignInError(err));
      yield error(err)
    }
  } else {
    yield put(actions.firebaseSignInError(err));
    yield error(err);
  }
}

export function* watchFirebaseSignIn() {
  yield takeEvery(types.FIREBASE_SIGN_IN_REQUEST, firebaseSignInSaga);
}