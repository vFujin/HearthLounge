import * as deleteActiveUserAction from '../delete-active-user.action';
import * as reauthenticateAction from '../reauthenticate.action';
import * as resetPasswordAction from '../reset-password.action';
import * as signInAction from '../sign-in.action';
import * as signOutAction from '../sign-out.action';
import * as types from '../../types';
import lowerCase from 'lodash/lowerCase';

describe('#firebaseActions', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      if(key && state !== undefined) {
        const expectedAction = {
          type: type,
          [key]: state
        };
        expect(action(state)).toEqual(expectedAction);
      } else {
        const expectedAction = {
          type: type
        };
        expect(action(state)).toEqual(expectedAction);
      }
    })
  };

  testActions(deleteActiveUserAction.firebaseDeleteActiveUserRequest, types.FIREBASE_DELETE_ACTIVE_USER_REQUEST);
  testActions(deleteActiveUserAction.firebaseDeleteActiveUserSuccess, types.FIREBASE_DELETE_ACTIVE_USER_SUCCESS);
  testActions(deleteActiveUserAction.firebaseDeleteActiveUserFailure, types.FIREBASE_DELETE_ACTIVE_USER_FAILURE, 'payload', {});

  testActions(reauthenticateAction.firebaseReauthenticateRequest, types.FIREBASE_REAUTHENTICATE_REQUEST);
  testActions(reauthenticateAction.firebaseReauthenticateSuccess, types.FIREBASE_REAUTHENTICATE_SUCCESS, 'payload', true);
  testActions(reauthenticateAction.firebaseReauthenticateError, types.FIREBASE_REAUTHENTICATE_ERROR, 'payload', {});

  testActions(resetPasswordAction.firebaseResetPasswordRequest, types.FIREBASE_RESET_PASSWORD_REQUEST);
  testActions(resetPasswordAction.firebaseResetPasswordSuccess, types.FIREBASE_RESET_PASSWORD_SUCCESS, 'payload', true);
  testActions(resetPasswordAction.firebaseResetPasswordError, types.FIREBASE_RESET_PASSWORD_ERROR, 'payload', {});

  testActions(signInAction.firebaseSignInRequest, types.FIREBASE_SIGN_IN_REQUEST);
  testActions(signInAction.firebaseSignInSuccess, types.FIREBASE_SIGN_IN_SUCCESS, 'payload', {});
  testActions(signInAction.firebaseSignInError, types.FIREBASE_SIGN_IN_ERROR, 'payload', {});

  testActions(signOutAction.firebaseSignOutRequest, types.FIREBASE_SIGN_OUT_REQUEST);
  testActions(signOutAction.firebaseSignOutSuccess, types.FIREBASE_SIGN_OUT_SUCCESS, 'payload', false);
  testActions(signOutAction.firebaseSignOutError, types.FIREBASE_SIGN_OUT_ERROR, 'payload', {});
});