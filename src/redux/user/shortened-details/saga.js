import {refParent} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";

export const fetchUserShortenedDetails = (uid) => {
  let simplifiedUser = {};

  return refParent('users').once("value", (snapshot) => {
    const user = snapshot.child(uid).val();

    if(user) {
      return simplifiedUser = {
        avatar: user.avatar ? user.avatar : "",
        rank: user.rank,
        role: user.role,
        username: user.username,
        loading: false
      };
    } else {
      return simplifiedUser = {
        avatar: null,
        username: "[deleted]",
      }
    }
  })
      .then(() => ({details: {[uid]: simplifiedUser}}))
      .catch(err => ({err: {[uid]: {err, loading: false}}}))
};

export function* fetchUserShortenedDetailsSaga({payload}) {
  const {details, err} = yield call(fetchUserShortenedDetails, payload);
  if(err){
    yield put(actions.fetchShortenedUserDetailsFailure(err));
  } else {
    yield put(actions.fetchShortenedUserDetailsSuccess(details));
  }
}

export function* watchUserShortenedDetails() {
  yield takeEvery(types.FETCH_SHORTENED_USER_DETAILS_REQUEST, fetchUserShortenedDetailsSaga)
}