import {put, takeEvery} from 'redux-saga/effects';
import {ref} from "../../../keys";
import {error} from "../../../utils/messages";
import * as types from "./types";
import * as actions from './actions';
import {fetchAllUsersRequest} from "../fetch-all-users/actions";

//that function should be a separate saga
export function getUserData(payload){
  const {uid} = payload;
  const entities = Object.keys(payload[uid]);

  return entities.map(entity => {
    if(entity === "usernames") {
      ref.child(`users/${uid}`).update({username: payload[uid].usernames})
        .then(() => console.log(`User ${uid} entity ${entity} has been updated`),
          (err) => console.log(`Couldn't update user ${uid} ${entity} entity. ${err.message}`));

      ref.child(`usernames`).update({[payload[uid][entity]]: uid})
        .then(() => console.log(`User ${uid} entity ${entity} has been updated`),
          (err) => console.log(`Couldn't update user ${uid} ${entity} entity. ${err.message}`));

    } else {
      return ref.child(`users/${uid}`).update({[entity]: payload[uid][entity]})
        .then(() => console.log(`User ${uid} entity ${entity} has been updated`),
          (err) => console.log(`Couldn't update user ${uid} ${entity} entity. ${err.message}`));
    }
  })

}

export function* updateUserSaga({payload}) {
  const {uid} = payload;
  if (uid) {
    yield getUserData(payload);
    yield put(actions.updateUserSuccess());
    yield put(fetchAllUsersRequest());
  } else {
    yield put(actions.updateUserFailure("Couldn't update user."));
    yield error("Couldn't update user");
  }
}

export function* watchUserUpdate() {
  yield takeEvery(types.UPDATE_USER_REQUEST, updateUserSaga);
}