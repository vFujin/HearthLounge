import {call, put} from 'redux-saga/effects';
import {fetchPatchSaga, fetchPatch} from "../current-hs-patch.saga";
import * as actions from "../../actions/current-hs-patch";

describe('current hs patch saga', () =>{
  describe('#fetchPatchSaga', () =>{

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchPatchSaga(),
            response = { current: 'patch'};

        expect(saga.next().value).toEqual(call(fetchPatch));
        expect(saga.next(response).value).toEqual(put(actions.fetchPatchSuccess(response.current)))
      })
    });

    describe('when error', () =>{
      test('dispatches an error action', () =>{
        const saga = fetchPatchSaga(),
            response = { error: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchPatch));
        expect(saga.next(response).value).toEqual(put(actions.fetchPatchFailure(response.error)))
      })
    });

  })
});