import {call, put} from 'redux-saga/effects';
import {fetchDecksSaga, fetchDecks} from "../saga";
import * as actions from "../actions";

describe('active user decks saga', () =>{
  describe('#fetchActiveUserDecksSaga', () =>{
    const payload = {payload: {decks: []}};
    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchDecksSaga({payload}),
          response = {decks: []};

        expect(saga.next().value).toEqual(call(fetchDecks, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchActiveUserDecksSuccess(response.decks)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchDecksSaga({payload}),
          response = { err: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchDecks, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchActiveUserDecksFailure(response.err)))
      })
    });

  })
});