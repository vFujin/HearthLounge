import {refParent} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";

export const fetchAllUsers = () => {
  let users = [];
  return refParent('users').once("value", (snapshot) => {
    let usersSnapshot = snapshot.val();
    for(let i = 0; i < Object.entries(usersSnapshot).length; i++){
      users.push({
        email: Object.entries(usersSnapshot)[i][1].email,
        username: Object.entries(usersSnapshot)[i][1].username,
        rank: Object.entries(usersSnapshot)[i][1].rank,
        role: Object.entries(usersSnapshot)[i][1].role,
        uid: Object.entries(usersSnapshot)[i][1].uid,
      })
    }
  })
    .then(() => ({users}))
    .catch(err => ({err, loading: false}))
};

export function* fetchAllUsersSaga() {
  const {users, err} = yield call(fetchAllUsers);
  if(err){
    yield put(actions.fetchAllUsersFailure(err));
  } else {
    yield put(actions.fetchAllUsersSuccess(users));
  }
}

export function* watchAllUsers() {
  yield takeEvery(types.FETCH_ALL_USERS_REQUEST, fetchAllUsersSaga)
}