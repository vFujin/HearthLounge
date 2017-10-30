import {refParent} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";

export const fetchUserShortenedDetails = (uid) => {
  let simplifiedUser = {};

  return refParent('users').once("value", (snapshot) => {
    const user = snapshot.child(uid).val();
    simplifiedUser = {
      avatar: user.avatar ? user.avatar : null,
      rank: user.rank,
      role: user.role,
      username: user.username,
      loading: false
    };
  })
      .then(() => ({details: {[uid]: simplifiedUser}}))
      .catch(err => ({err: {[uid]: {err, loading: false}}}))
};

export function* fetchUserShortenedDetailsSaga({payload}) {
  const {details, error} = yield call(fetchUserShortenedDetails, payload);
  if(error){
    yield put(actions.fetchShortenedUserDetailsFailure(error));
  } else {
    yield put(actions.fetchShortenedUserDetailsSuccess(details));
  }
}

export function* watchUserShortenedDetails() {
  yield takeEvery(types.FETCH_SHORTENED_USER_DETAILS_REQUEST, fetchUserShortenedDetailsSaga)
}