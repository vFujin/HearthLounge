import {call, put} from 'redux-saga/effects';
import {fetchRedditPostCommentsSaga, fetchRedditPostComments} from "../saga";
import * as actions from "../actions";

describe('reddit post comments saga', () =>{
  describe('#fetchRedditPostCommentsSaga', () =>{
    const payload = {payload: {comments: []}};
    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchRedditPostCommentsSaga({payload}),
          response = {comments: []};

        expect(saga.next().value).toEqual(call(fetchRedditPostComments, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchRedditPostCommentsSuccess(response.comments)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchRedditPostCommentsSaga({payload}),
          response = { error: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchRedditPostComments, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchRedditPostCommentsFailure(response.error)))
      })
    });
  })
});