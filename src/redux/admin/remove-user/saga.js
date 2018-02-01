import {put, takeEvery} from 'redux-saga/effects';
import {ref} from "../../../keys";
import {error} from "../../../utils/messages";
import * as types from "./types";
import * as actions from './actions';
import {fetchAllUsersRequest} from "../fetch-all-users/actions";

//that function should be a separate saga
export function getUserData(entity, uid){
  ref.child(`${entity}/${uid}`).remove()
    .then(()=>console.log(`User ${uid} entity ${entity} has been deleted`),
      (err)=>console.log(`Couldn't delete user ${uid} ${entity} entity. ${err.message}`));
}

export function* deleteUserSaga({payload}) {
  if (payload) {
    getUserData('users', payload);
    getUserData('user-decks', payload);
    getUserData('user-deck-comments', payload);
    // if (username !== email) {
    //   getUserData('usernames', username)
    // }
    yield put(actions.deleteUserSuccess());
    yield put(fetchAllUsersRequest())
  } else {
    yield put(actions.deleteUserFailure("Couldn't delete user."));
    yield error("Couldn't delete user");
  }
}

export function* watchUserDeletion() {
  yield takeEvery(types.DELETE_USER_REQUEST, deleteUserSaga);
}