import {call, put} from 'redux-saga/effects';
import {deleteDeckSaga, deleteDeck} from "../saga";
import * as actions from "../actions";
import {createDocument} from "../../../../utils/test-helpers";
import history from '../../../../globals/history';
import {success} from "../../../../utils/messages";

//prooly will need to implement .spyOn() and do some shenanigans in order

describe('delete deck saga', () =>{
  beforeAll(()=>{
    createDocument();
  });

  describe('#deleteDeckSaga', () =>{
    const payload = {payload: {}};

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = deleteDeckSaga({payload}),
          response = {deckId: "fakeId123"};

        expect(saga.next().value).toEqual(call(deleteDeck, payload));
        expect(saga.next(response).value).toEqual(put(actions.deleteDeckSuccess(response.deckId)))
      });

      test('should change location to /decks', () =>{
        const saga = deleteDeckSaga({payload}),
          response = {deckId: "fakeId123"};

        expect(saga.next().value).toEqual(call(deleteDeck, payload));
        expect(saga.next(response).value).toEqual(put(actions.deleteDeckSuccess(response.deckId)));
        expect(saga.next().value).toEqual(history.push('/decks'));
      });

      test('should show success toast', () =>{
        const saga = deleteDeckSaga({payload}),
          response = {deckId: "fakeId123"};

        expect(saga.next().value).toEqual(call(deleteDeck, payload));
        expect(saga.next(response).value).toEqual(put(actions.deleteDeckSuccess(response.deckId)));
        expect(saga.next().value).toEqual(history.push('/decks'));
        expect(saga.next().value).toEqual(success("fake success message"));
      });
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = deleteDeckSaga({payload}),
          response = { err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(deleteDeck, payload));
        expect(saga.next(response).value).toEqual(put(actions.deleteDeckFailure(response.err)))
      });
    });
  })
});