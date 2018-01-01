import {call, put} from 'redux-saga/effects';
import {fetchDecksUpdateSaga, fetchDecksUpdate} from "../saga";
import * as actions from "../actions";

describe('update decks saga', () =>{
  describe('#fetchDecksUpdateSaga', () =>{
    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchDecksUpdateSaga(),
          response = {decks: []};

        expect(saga.next().value).toEqual(call(fetchDecksUpdate));
        expect(saga.next(response).value).toEqual(put(actions.fetchDecksUpdateSuccess(response.decks)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchDecksUpdateSaga(),
          response = { updateErr: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(fetchDecksUpdate));
        expect(saga.next(response).value).toEqual(put(actions.fetchDecksUpdateFailure(response.updateErr)))
      })
    });
  })
});