import {call, put} from 'redux-saga/effects';
import {fetchDeckCommentsSaga, fetchDeckComments} from "../saga";
import * as actions from "../actions";

describe('fetch comments saga', () =>{
  describe('#fetchCommentsSaga', () =>{
    const payload = {payload: []};

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchDeckCommentsSaga({payload}),
          response = {deckComments: []};

        expect(saga.next().value).toEqual(call(fetchDeckComments, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchActiveDeckCommentsSuccess(response.deckComments)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchDeckCommentsSaga({payload}),
          response = { err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(fetchDeckComments, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchActiveDeckCommentsFailure(response.err)))
      })
    });
  })
});