import {call, put} from 'redux-saga/effects';
import {fetchRedditPostsSaga, fetchRedditPosts} from "../saga";
import * as actions from "../actions";

describe('reddit posts saga', () =>{
  describe('#fetchRedditPostsSaga', () =>{
    const payload = {payload: {posts: []}};
    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchRedditPostsSaga({payload}),
            response = {posts: []};

        expect(saga.next().value).toEqual(call(fetchRedditPosts, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchRedditPostsSuccess(response.posts)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchRedditPostsSaga({payload}),
            response = { error: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchRedditPosts, payload));
        expect(saga.next(response).value).toEqual(put(actions.fetchRedditPostsFailure(response.error)))
      })
    });

  })
});