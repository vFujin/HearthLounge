import {call, put} from 'redux-saga/effects';
import {firebaseSignIn, firebaseSignInSaga} from "../sign-in.saga";
import * as actions from "../../../../../actions/firebase/user/utils/sign-in.action";

describe('firebase sign in saga', () =>{
  describe('#firebaseSignIn', () =>{

    describe('when success', () =>{



      test('should fetch user uid', () =>{
        let payload = {email: 'e@e.com', pass: '12345678'};
        const saga = firebaseSignInSaga(payload),
            response = {activeUserId: '123'};

        expect(saga.next().value).toBe(call(firebaseSignIn, payload));
        // expect(saga.next().value).toEqual(call(firebaseSignIn, payload));
        // expect(saga.next(response).value).toEqual(put(actions.firebaseSignInSuccess(response.activeUserId)))
      });




      test('should dispatch success action', () =>{
        const saga = firebaseSignInSaga({email: 'e@e.com', pass: '12345678'}),
            response = {activeUserId: '123'};

        expect(saga.next().value).toEqual(call(firebaseSignIn));
        expect(saga.next(response).value).toEqual(put(actions.firebaseSignInSuccess(response.activeUserId)))
      });

      test('should call success message', () =>{
        const saga = firebaseSignInSaga(),
            response = {authenticated: true},
            successMsg = jest.fn();
        expect(saga.next().value).toEqual(call(firebaseSignIn));
        expect(saga.next().value).toBe(successMsg())
      })
    });

    describe('when error', () =>{
      test('should dispatch success action', () =>{
        const saga = firebaseSignInSaga(),
            response = {error: 'fake err'};

        expect(saga.next().value).toEqual(call(firebaseSignIn));
        expect(saga.next(response).value).toEqual(put(actions.firebaseSignInError(response.authenticated)))
      });
    });

  })
});