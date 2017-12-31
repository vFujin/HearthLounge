import {call, put} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {firebaseSignOut, firebaseSignOutSaga} from "../sign-out.saga";
import {error, success} from "../../../../utils/messages";
import * as actions from "../../../../../firebase/utils/sign-out.action";

describe('firebase sign out saga', () =>{
  describe('#firebaseSignOut', () =>{

    describe('when success', () =>{

      test('should dispatch success action', () =>{
        const saga = firebaseSignOutSaga(),
            response = {signedOut: true};

        expect(saga.next().value).toEqual(call(firebaseSignOut));
        expect(saga.next(response).value).toEqual(put(actions.firebaseSignOutSuccess(response.signedOut)))
      });

      test('should show success toast notification', () =>{
        const saga = firebaseSignOutSaga(),
            response = {signedOut: true},
            successToast = success("success");

        expect(saga.next().value).toEqual(call(firebaseSignOut));
        expect(saga.next(response).value).toEqual(put(actions.firebaseSignOutSuccess(response.signedOut)));
        expect(saga.next().value).toEqual(successToast);
      });

      test('should change location to home (index)', () =>{
        const saga = firebaseSignOutSaga(),
            response = {signedOut: true},
            successToast = success("success");

        expect(saga.next().value).toEqual(call(firebaseSignOut));
        expect(saga.next(response).value).toEqual(put(actions.firebaseSignOutSuccess(response.signedOut)));
        expect(saga.next(response).value).toEqual(successToast);
        expect(saga.next(response).value).toEqual(put(push('/')));
      });
    });

    describe('when error', () =>{
      test('should dispatch error action', () =>{
        const saga = firebaseSignOutSaga(),
            response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(firebaseSignOut));
        expect(saga.next(response).value).toEqual(put(actions.firebaseSignOutError(response.err)))
      });

      test('should show error toast notification', () =>{
        const saga = firebaseSignOutSaga(),
            response = {err: {message: 'fake err'}},
            errorToast = error("fake err");

        expect(saga.next().value).toEqual(call(firebaseSignOut));
        expect(saga.next(response).value).toEqual(put(actions.firebaseSignOutError(response.err)));
        expect(saga.next(response).value).toEqual(errorToast);
      });
    });

  })
});