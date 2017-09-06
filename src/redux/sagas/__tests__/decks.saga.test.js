import {call, put} from 'redux-saga/effects';
import {fetchDecksSaga, fetchDecks} from "../decks.saga";
import * as actions from "../../actions/decks/decks";

describe('fetch decks saga', () =>{
  describe('#fetchDecks', () =>{

    describe('when success', () =>{

      test('should dispatch success action', () =>{
        const saga = fetchDecksSaga(),
            response = {decks: []};

        expect(saga.next().value).toEqual(call(fetchDecks));
        expect(saga.next(response).value).toEqual(put(actions.fetchDecksSuccess(response.decks)))
      });
    });

    describe('when error', () =>{
      test('should dispatch error action', () =>{
        const saga = fetchDecksSaga(),
            response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(fetchDecks));
        expect(saga.next(response).value).toEqual(put(actions.fetchDecksFailure(response.err)))
      });
    });

  })
});