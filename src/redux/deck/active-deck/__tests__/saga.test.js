import {call, put} from 'redux-saga/effects';
import {fetchActiveDeckSaga, fetchActiveDeck} from "../saga";
import * as actions from "../actions";

describe('active deck saga', () =>{
  describe('#fetchActiveDeckSaga', () =>{
    const payload = {payload: '123'};

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchActiveDeckSaga({payload}),
          response = {activeDeck: {}};

        expect(saga.next().value).toEqual(call(fetchActiveDeck, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchActiveDeckSuccess(response.activeDeck)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchActiveDeckSaga({payload}),
          response = { err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(fetchActiveDeck, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchActiveDeckFailure(response.err.message)))
      })
    });
  })
});