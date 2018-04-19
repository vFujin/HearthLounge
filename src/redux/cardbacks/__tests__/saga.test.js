import {call, put} from 'redux-saga/effects';
import {fetchCardBacksSaga, fetchCardbacks} from "../saga";
import * as actions from "../actions";

describe('cardbacks saga', () =>{
  describe('#fetchCardbacksSaga', () =>{
    const payload = {payload: []};

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchCardBacksSaga({payload}),
          response = {cardbacks: []};

        expect(saga.next().value).toEqual(call(fetchCardbacks, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchCardbacksSuccess(response.cardbacks)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchCardBacksSaga({payload}),
          response = { error: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(fetchCardbacks, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchCardbacksFailure(response.error.message)))
      })
    });
  })
});