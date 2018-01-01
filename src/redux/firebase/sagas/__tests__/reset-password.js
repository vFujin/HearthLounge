import React from 'react';
import {call, put} from 'redux-saga/effects';
import {error, success} from "../../../../utils/messages";
import * as actions from "../../actions/reset-password.action";
import {firebaseResetPassword, firebaseResetPasswordSaga} from "../reset-password.saga";
import {createDocument} from "../../../../utils/test-helpers";

beforeAll(()=>{
  createDocument();
});

describe('firebase reset password saga', () =>{
  describe('#firebaseResetPassword', () =>{
    const payload = {payload: "randomPass"};

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = firebaseResetPasswordSaga({payload}),
            response = {resetPassword: true};

        expect(saga.next().value).toEqual(call(firebaseResetPassword, payload));
        expect(saga.next(response).value).toEqual(put(actions.firebaseResetPasswordSuccess(response.resetPassword)))
      });

      test('should show success toast notification', () =>{
        const saga = firebaseResetPasswordSaga({payload}),
            response = {resetPassword: true},
            successToast = success("success");

        expect(saga.next().value).toEqual(call(firebaseResetPassword, payload));
        expect(saga.next(response).value).toEqual(put(actions.firebaseResetPasswordSuccess(response.resetPassword)));
        expect(saga.next().value).toEqual(successToast);
      });
    });

    describe('when error', () =>{
      test('should dispatch error action', () =>{
        const saga = firebaseResetPasswordSaga({payload}),
            response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(firebaseResetPassword));
        expect(saga.next(response).value).toEqual(put(actions.firebaseResetPasswordError(response.err)))
      });

      test('should show error toast notification', () =>{
        const saga = firebaseResetPasswordSaga({payload}),
            response = {err: {message: 'fake err'}},
            errorToast = error("fake err");

        expect(saga.next().value).toEqual(call(firebaseResetPassword, payload));
        expect(saga.next(response).value).toEqual(put(actions.firebaseResetPasswordError(response.err)));
        expect(saga.next().value).toEqual(errorToast);
      });
    });

  })
});