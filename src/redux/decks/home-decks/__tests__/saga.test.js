import {call, put} from 'redux-saga/effects';
import {fetchHotDecksSaga, fetchHotDecks} from "../saga";
import * as actions from "../actions";

describe('fetch home (hot) decks saga', () =>{
  describe('#fetchHomeDecks', () =>{
    const payload = [];

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchHotDecksSaga({payload}),
            response = {payload: []}

        expect(saga.next().value).toEqual(call(fetchHotDecks, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchHotDecksSuccess(response)))
      });
    });

    describe('when error', () =>{
      test('should dispatch error action', () =>{
        const saga = fetchHotDecksSaga({payload}),
            response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(fetchHotDecks, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchHotDecksFailure(response.err)))
      });
    });

  })
});