import {call, put} from 'redux-saga/effects';
import { } from "../reauthenticate.saga";
import {error, success} from "../../../../../../utils/messages";
import * as actions from "../../../../../actions/firebase/user/utils/reauthenticate.action";
import {firebaseReauthenticateSaga, firebaseReauthenticate} from "../reauthenticate.saga";

describe('firebase reauthenticate saga', () =>{
  describe('#firebaseReauthenticate', () =>{

    describe('when success', () =>{

      test('should dispatch success action', () =>{
        const saga = firebaseReauthenticateSaga(),
            response = {reauthenticated: true};

        expect(saga.next().value).toEqual(call(firebaseReauthenticate));
        expect(saga.next(response).value).toEqual(put(actions.firebaseReauthenticateSuccess(response.signedOut)))
      });

      test('should show success toast notification', () =>{
        const saga = firebaseReauthenticateSaga(),
            response = {signedOut: true},
            successToast = success("success");

        expect(saga.next().value).toEqual(call(firebaseReauthenticate));
        expect(saga.next(response).value).toEqual(put(actions.firebaseReauthenticateSuccess(response.signedOut)));
        expect(saga.next(response).value).toEqual(successToast);
      });
    });

    describe('when error', () =>{
      test('should dispatch error action', () =>{
        const saga = firebaseReauthenticateSaga(),
            response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(firebaseReauthenticate));
        expect(saga.next(response).value).toEqual(put(actions.firebaseReauthenticateError(response.err)))
      });

      test('should show error toast notification', () =>{
        const saga = firebaseSignOutSaga(),
            response = {err: {message: 'fake err'}},
            errorToast = error("fake err");

        expect(saga.next().value).toEqual(call(firebaseReauthenticate));
        expect(saga.next(response).value).toEqual(put(actions.firebaseReauthenticateError(response.err)));
        expect(saga.next(response).value).toEqual(errorToast);
      });
    });

  })
});