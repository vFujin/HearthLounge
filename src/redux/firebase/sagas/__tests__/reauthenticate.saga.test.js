import { call, put } from 'redux-saga/effects';
import { error, success } from '../../../../utils/messages';
import * as actions from '../../actions/reauthenticate.action';
import {
  firebaseReauthenticateSaga,
  firebaseReauthenticate,
} from '../reauthenticate.saga';
import { createDocument } from '../../../../utils/test-helpers';
import history from '../../../../globals/history';

beforeAll(() => {
  createDocument();
});

describe('firebase reauthenticate saga', () => {
  describe('#firebaseReauthenticate', () => {
    const user = { payload: { email: 'e@e.com', password: '12345678' } };
    const { payload } = user;
    describe('when success', () => {
      test('should dispatch success action', () => {
        const saga = firebaseReauthenticateSaga({ payload }),
          response = { reauthenticated: true };

        expect(saga.next().value).toEqual(
          call(firebaseReauthenticate, payload)
        );
        expect(saga.next(response).value).toEqual(
          put(actions.firebaseReauthenticateSuccess(response.reauthenticated))
        );
      });

      test('should show success toast notification', () => {
        const saga = firebaseReauthenticateSaga({ payload }),
          response = { reauthenticated: true },
          successToast = success('success');

        expect(saga.next().value).toEqual(
          call(firebaseReauthenticate, payload)
        );
        expect(saga.next(response).value).toEqual(
          put(actions.firebaseReauthenticateSuccess(response.reauthenticated))
        );
        expect(saga.next().value).toEqual(successToast);
      });

      test('should redirect to sign in page', () => {
        const saga = firebaseReauthenticateSaga({ payload }),
          response = { reauthenticated: true },
          successToast = success('success');

        expect(saga.next().value).toEqual(
          call(firebaseReauthenticate, payload)
        );
        expect(saga.next(response).value).toEqual(
          put(actions.firebaseReauthenticateSuccess(response.reauthenticated))
        );
        expect(saga.next().value).toEqual(successToast);
        expect(saga.next().value).toEqual(history.push('/signIn'));
      });
    });

    describe('when error', () => {
      test('should dispatch error action', () => {
        const saga = firebaseReauthenticateSaga({ payload }),
          response = { err: { message: 'fake err' } };

        expect(saga.next().value).toEqual(
          call(firebaseReauthenticate, payload)
        );
        expect(saga.next(response).value).toEqual(
          put(actions.firebaseReauthenticateError(response.err))
        );
      });

      test('should show error toast notification', () => {
        const saga = firebaseReauthenticateSaga({ payload }),
          response = { err: { message: 'fake err' } },
          errorToast = error('fake err', 2);

        expect(saga.next().value).toEqual(
          call(firebaseReauthenticate, payload)
        );
        expect(saga.next(response).value).toEqual(
          put(actions.firebaseReauthenticateError(response.err))
        );
        expect(saga.next().value).toEqual(errorToast);
      });
    });
  });
});
