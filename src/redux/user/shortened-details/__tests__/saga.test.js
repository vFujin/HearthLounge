import {call, put} from 'redux-saga/effects';
import {fetchUserShortenedDetailsSaga, fetchUserShortenedDetails} from "../saga";
import * as actions from "../actions";

describe('shortened user details saga', () =>{
  describe('#fetchShortenedUserDetailsSaga', () =>{
    const payload = {payload: {uid: "fakeUid123"}};
    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchUserShortenedDetailsSaga({payload}),
          response = {details: {[payload.payload.uid]: {}}};

        expect(saga.next().value).toEqual(call(fetchUserShortenedDetails, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchShortenedUserDetailsSuccess(response.details)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchUserShortenedDetailsSaga({payload}),
          response = { err: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchUserShortenedDetails, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchShortenedUserDetailsFailure(response.err)))
      })
    });

  })
});