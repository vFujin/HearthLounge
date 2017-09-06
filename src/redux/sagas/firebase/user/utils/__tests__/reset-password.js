import React from 'react';
import {call, put} from 'redux-saga/effects';
import { } from "../reauthenticate.saga";
import {error, success} from "../../../../../../utils/messages";
import * as actions from "../../../../../actions/firebase/user/utils/reset-password.action";
import {firebaseResetPassword, firebaseResetPasswordSaga} from "../reset-password.saga";
import jsdom from 'jsdom';
const {JSDOM} = jsdom;
const {document} = (new JSDOM(`<!DOCTYPE html><html><body><div></div></body></html>`));
global.document = document;

describe('firebase reset password saga', () =>{
  describe('#firebaseResetPassword', () =>{

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = firebaseResetPasswordSaga({payload: 123}),
            response = {resetPassword: true};

        expect(saga.next().value).toEqual(call(firebaseResetPassword, 123));
        expect(saga.next(response).value).toEqual(put(actions.firebaseResetPasswordSuccess(response.resetPassword)))
      });

      test('should show success toast notification', () =>{
        const saga = firebaseResetPasswordSaga({payload: 123}),
            response = {resetPassword: true},
            successToast = success("success");

        expect(saga.next().value).toEqual(call(firebaseResetPassword, 123));
        expect(saga.next(response).value).toEqual(put(actions.firebaseResetPasswordSuccess(response.resetPassword)));
        expect(saga.next(response).value).toEqual(successToast);
      });
    });

    describe('when error', () =>{
      test('should dispatch error action', () =>{
        const saga = firebaseResetPasswordSaga({payload: 123}),
            response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(firebaseResetPassword, 123));
        expect(saga.next(response).value).toEqual(put(actions.firebaseResetPasswordError(response.err)))
      });

      test('should show error toast notification', () =>{
        const saga = firebaseResetPasswordSaga({payload: 123}),
            response = {err: {message: 'fake err'}},
            errorToast = error("fake err");

        expect(saga.next().value).toEqual(call(firebaseResetPassword, 123));
        expect(saga.next(response).value).toEqual(put(actions.firebaseResetPasswordError(response.err)));
        expect(saga.next(response).value).toEqual(errorToast);
      });
    });

  })
});