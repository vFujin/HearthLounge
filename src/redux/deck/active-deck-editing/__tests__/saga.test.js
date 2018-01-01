import {call, put} from 'redux-saga/effects';
import {updateActiveDeckSaga, updateActiveDeck} from "../saga";
import * as actions from "../actions";

describe('udpate active deck saga', () =>{
  describe('#updateActiveDeckSaga', () =>{
    const payload = {payload: {}};

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = updateActiveDeckSaga({payload}),
          response = {activeDeckUpdated: true};

        expect(saga.next().value).toEqual(call(updateActiveDeck, payload));
        expect(saga.next(response).value).toEqual(put(actions.updateActiveDeckSuccess(response.activeDeckUpdated)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = updateActiveDeckSaga({payload}),
          response = { err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(updateActiveDeck, payload));
        expect(saga.next(response).value).toEqual(put(actions.updateActiveDeckFailure(response.err)))
      })
    });
  })
});