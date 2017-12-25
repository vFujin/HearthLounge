import {call, put} from 'redux-saga/effects';
import {fetchGameInfoSaga, fetchGameInfo} from "../saga";
import * as actions from "../actions";

describe('current hs patch saga', () =>{
  describe('#fetchGameInfoSaga', () =>{

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchGameInfoSaga(),
            response = { current: 'patch'};

        expect(saga.next().value).toEqual(call(fetchGameInfo));
        expect(saga.next(response).value).toEqual(put(actions.fetchInfoSuccess(response.current)))
      })
    });

    describe('when error', () =>{
      test('dispatches an error action', () =>{
        const saga = fetchGameInfoSaga(),
            response = { error: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchGameInfo));
        expect(saga.next(response).value).toEqual(put(actions.fetchInfoFailure(response.error)))
      })
    });

  })
});