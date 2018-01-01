import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#redditPostsActions', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      if(key && state !== undefined) {
        const expectedAction = {
          type: type,
          [key]: state
        };
        expect(action(state)).toEqual(expectedAction);
      } else {
        const expectedAction = {
          type: type
        };
        expect(action(state)).toEqual(expectedAction);
      }
    })
  };

  testActions(actions.fetchRedditPostsRequest, types.FETCH_REDDIT_POSTS_REQUEST);
  testActions(actions.fetchRedditPostsSuccess, types.FETCH_REDDIT_POSTS_SUCCESS, 'payload', []);
  testActions(actions.fetchRedditPostsFailure, types.FETCH_REDDIT_POSTS_FAILURE, 'payload', {});
});