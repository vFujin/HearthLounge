import {call, put} from 'redux-saga/effects';
import {fetchRedditPostSaga, fetchRedditPost} from "../saga";
import * as actions from "../actions";

describe('fetch reddit post saga', () =>{
  describe('#fetchRedditPostSaga', () =>{
    const payload = {payload: {postId: "fakePostId123"}};
    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchRedditPostSaga({payload}),
          response = {comments: {}, post: {}};

        expect(saga.next().value).toEqual(call(fetchRedditPost, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchRedditPostSuccess({post: response.post, comments: response.comments})))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchRedditPostSaga({payload}),
          response = { error: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchRedditPost, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchRedditPostFailure(response.error)))
      })
    });
  })
});