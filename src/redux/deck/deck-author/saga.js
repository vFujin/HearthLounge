import { call, put, takeEvery } from 'redux-saga/effects';
import { getUser } from '../../../firebase/user/read/index';
import * as actions from './actions';
import * as types from './types';

export const fetchDeckAuthor = uid => {
  let deckPromise = new Promise((resolve, reject) =>
    getUser(uid, resolve, reject)
  );
  return deckPromise
    .then(deckAuthor => ({ deckAuthor }))
    .catch(err => ({ err: err.message }));
};

export function* fetchDeckAuthorSaga({ payload }) {
  const { deckAuthor, err } = yield call(fetchDeckAuthor, payload);
  if (err) {
    yield put(actions.fetchDeckAuthorFailure(err));
  } else {
    yield put(actions.fetchDeckAuthorSuccess(deckAuthor));
  }
}

export function* watchDeckAuthor() {
  yield takeEvery(types.FETCH_DECK_AUTHOR_REQUEST, fetchDeckAuthorSaga);
}
