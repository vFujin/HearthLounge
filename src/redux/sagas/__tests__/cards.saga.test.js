import {call, put} from 'redux-saga/effects';
import {fetchCardsSaga, fetchCards} from "../../cards/saga";
import * as actions from "../../cards/actions";

describe('cards saga', () =>{
  describe('#fetchCardsSaga', () =>{
    const payload = {payload: {cards: []}};
    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchCardsSaga({payload}),
            response = {cards: []};

        expect(saga.next().value).toEqual(call(fetchCards, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchCardsSuccess(response.cards)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchCardsSaga({payload}),
            response = { error: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchCards, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchCardsFailure(response.error)))
      })
    });

  })
});