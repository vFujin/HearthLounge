import {call, put} from 'redux-saga/effects';
import {fetchRedditPostsSaga, fetchRedditPosts} from "../reddit-posts.saga";
import * as actions from "../../actions/reddit";

describe('reddit posts saga', () =>{
  describe('#fetchRedditPostsSaga', () =>{

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = fetchRedditPostsSaga({payload: {posts: []}}),
            response = {posts: []};

        expect(saga.next().value).toEqual(call(fetchRedditPosts));
        expect(saga.next(response).value).toEqual(put(actions.fetchRedditPostsSuccess(response.posts)))
      })
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = fetchRedditPostsSaga({payload: {error: ""}}),
            response = { error: 'fake err'};

        expect(saga.next().value).toEqual(call(fetchRedditPosts));
        expect(saga.next(response).value).toEqual(put(actions.fetchRedditPostsFailure(response.error)))
      })
    });

  })
});