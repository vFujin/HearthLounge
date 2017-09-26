import {call, put} from 'redux-saga/effects';
import {fetchDecksSaga, fetchDecks} from "../saga";
import * as actions from "../actions";

describe('fetch decks saga', () =>{
  describe('#fetchDecks', () =>{
    describe('when success', () =>{

      test('should dispatch success action', () =>{
        const saga = fetchDecksSaga(),
            response = {decks: []};

        expect(saga.next().value).toEqual(call(fetchDecks));
        expect(saga.next(response).value).toEqual(put(actions.fetchHotDecksSuccess(response.decks)))
      });
    });

    describe('when error', () =>{
      test('should dispatch error action', () =>{
        const saga = fetchDecksSaga(),
            response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(fetchDecks));
        expect(saga.next(response).value).toEqual(put(actions.fetchHotDecksFailure(response.err)))
      });
    });

  })
});