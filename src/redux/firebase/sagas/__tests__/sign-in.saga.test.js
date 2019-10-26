import { call, put } from 'redux-saga/effects';
import { firebaseSignIn, firebaseSignInSaga } from '../sign-in.saga';
import { success, error } from '../../../../utils/messages';
import * as actions from '../../actions/sign-in.action';
import { createDocument } from '../../../../utils/test-helpers';

beforeAll(() => {
  createDocument();
});

describe('firebase sign in saga', () => {
  describe('#firebaseSignIn', () => {
    const payload = { email: '123', pass: '123' };

    describe('when success', () => {
      test('should call firebaseSignIn', () => {
        const saga = firebaseSignInSaga({ payload });

        expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
      });

      describe('when user exists', () => {
        describe('when success', () => {
          test('should fetch user id', () => {
            const saga = firebaseSignInSaga({ payload }),
              resultSignIn = { activeUserId: 'uid123' };
            expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
            expect(saga.next(resultSignIn).value).toBe(
              resultSignIn.activeUserId
            );
          });

          test('should dispatch success action', () => {
            const saga = firebaseSignInSaga({ payload }),
              resultSignIn = { activeUserId: 'uid123' },
              resultUser = { activeUser: 'foo' };
            expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
            expect(saga.next(resultSignIn).value).toEqual(
              call(firebaseSignIn, resultSignIn.activeUserId)
            );
            expect(saga.next(resultUser).value).toEqual(
              put(actions.firebaseSignInSuccess(resultUser.activeUser))
            );
          });

          test('should call success toast message', () => {
            const saga = firebaseSignInSaga({ payload }),
              resultSignIn = { activeUserId: 'uid123' },
              resultUser = { activeUser: 'foo' };
            expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
            expect(saga.next(resultSignIn).value).toEqual(
              call(firebaseSignIn, resultSignIn.activeUserId)
            );
            expect(saga.next(resultUser).value).toEqual(
              put(actions.firebaseSignInSuccess(resultUser.activeUser))
            );
            expect(saga.next().value).toEqual(success('success msg'));
          });

          test('should redirect to dashboard', () => {
            const saga = firebaseSignInSaga({ payload }),
              resultSignIn = { activeUserId: 'uid123' },
              resultUser = { activeUser: 'foo' };
            expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
            expect(saga.next(resultSignIn).value).toEqual(
              call(firebaseSignIn, resultSignIn.activeUserId)
            );
            expect(saga.next(resultUser).value).toEqual(
              put(actions.firebaseSignInSuccess(resultUser.activeUser))
            );
            expect(saga.next().value).toEqual(success('success msg'));
            expect(saga.next().value).toEqual(push('/dashboard'));
          });
        });
        describe('when error', () => {
          test('should dispatch error action', () => {
            const saga = firebaseSignInSaga({ payload }),
              resultSignIn = { err: { message: 'fake user err' } };
            expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
            expect(saga.next(resultSignIn).value).toEqual(
              put(actions.firebaseSignInError(resultSignIn.err))
            );
          });

          test('should show error toast message', () => {
            const saga = firebaseSignInSaga({ payload }),
              resultSignIn = { err: { message: 'fake user err' } };
            expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
            expect(saga.next(resultSignIn).value).toEqual(
              put(actions.firebaseSignInError(resultSignIn.err))
            );
            expect(saga.next().value).toEqual(error(resultSignIn.err.message));
          });
        });
      });
    });

    describe('when error', () => {
      test('should dispatch error action', () => {
        const saga = firebaseSignInSaga({ payload }),
          response = { err: { message: 'fake err' } };

        expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
        expect(saga.next(response).value).toEqual(
          put(actions.firebaseSignInError(response.err))
        );
      });

      test('should call error toast message', () => {
        const saga = firebaseSignInSaga({ payload }),
          response = { err: { message: 'fake err' } },
          msg = error('error');
        expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
        expect(saga.next(response).value).toEqual(
          put(actions.firebaseSignInError(response.err))
        );
        expect(saga.next().value).toEqual(error(response.err.message));
      });
    });
  });
});
