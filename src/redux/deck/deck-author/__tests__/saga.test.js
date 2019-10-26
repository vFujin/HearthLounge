import { call, put } from 'redux-saga/effects';
import { fetchDeckAuthorSaga, fetchDeckAuthor } from '../saga';
import * as actions from '../actions';

describe('fetch deck author saga', () => {
  describe('#fetchDeckAuthorSaga', () => {
    const payload = { payload: {} };

    describe('when success', () => {
      test('should dispatch success action', () => {
        const saga = fetchDeckAuthorSaga({ payload }),
          response = { deckAuthor: { uid: '123' } };

        expect(saga.next().value).toEqual(call(fetchDeckAuthor, payload));
        expect(saga.next(response).value).toEqual(
          put(actions.fetchDeckAuthorSuccess(response.deckAuthor))
        );
      });
    });

    describe('when error', () => {
      test('should dispatch an error action', () => {
        const saga = fetchDeckAuthorSaga({ payload }),
          response = { err: { message: 'fake err' } };

        expect(saga.next().value).toEqual(call(fetchDeckAuthor, payload));
        expect(saga.next(response).value).toEqual(
          put(actions.fetchDeckAuthorFailure(response.err))
        );
      });
    });
  });
});
