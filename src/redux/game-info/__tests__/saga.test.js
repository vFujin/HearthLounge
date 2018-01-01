import {call, put} from 'redux-saga/effects';
import {fetchGameInfoSaga, fetchGameInfo} from "../saga";
import * as actions from "../actions";

describe('current hs patch saga', () =>{
  describe('#fetchGameInfoSaga', () =>{

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchGameInfoSaga(),
            response = {data: {}};

        expect(saga.next().value).toEqual(call(fetchGameInfo));
        expect(saga.next(response).value).toEqual(put(actions.fetchGameInfoSuccess(response.data)))
      })
    });

    describe('when error', () =>{
      test('dispatches an error action', () =>{
        const saga = fetchGameInfoSaga(),
            response = { error: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchGameInfo));
        expect(saga.next(response).value).toEqual(put(actions.fetchGameInfoFailure(response.error)))
      })
    });

  })
});