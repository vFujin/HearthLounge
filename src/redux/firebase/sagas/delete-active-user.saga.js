import {call, put, takeEvery} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {ref} from "../../../keys";
import {error, success} from "../../../utils/messages";
import * as types from "../types";
import * as actions from '../actions/delete-active-user.action';
import {activeUser} from "../../../utils/active-user";

//that function should be a separate saga
export function getUserData(entity, uid){
  ref.child(`${entity}/${uid}`).remove()
      .then(()=>console.log(`User ${uid} entity ${entity} has been deleted`),
          (err)=>console.log(`Couldn't delete user ${uid} ${entity} entity. ${err.message}`));
}

export const firebaseDeleteActiveUser = (payload) => {
  return activeUser().delete()
      .then(() => ({RTDBUser: payload})) //RTDB - real time database
      .catch(err => ({deleteError: err.message}))
};

export function* firebaseDeleteActiveUserSaga({payload}) {
  const {RTDBUser, deleteError} = yield call(firebaseDeleteActiveUser, payload);
  const {uid, username, email} = RTDBUser;
  if (RTDBUser) {
    getUserData('users', uid);
    getUserData('user-decks', uid);
    getUserData('user-deck-ratings', uid);
    getUserData('user-deck-comments', uid);
    getUserData('user-deck-newComment-ratings', uid);
    if(username !== email) {
      getUserData('usernames', username)
    }
    yield put(actions.firebaseDeleteActiveUserSuccess());
    yield success('Account deleted successfully!');
    yield push('/');
  } else {
    yield put(actions.firebaseDeleteActiveUserFailure(deleteError));
    yield error(deleteError);
  }
}

export function* watchFirebaseDeleteActiveUser() {
  yield takeEvery(types.FIREBASE_DELETE_ACTIVE_USER_REQUEST, firebaseDeleteActiveUserSaga);
}