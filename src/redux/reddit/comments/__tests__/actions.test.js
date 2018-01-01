import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#redditCommentsActions', () =>{
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

  testActions(actions.fetchRedditPostCommentsRequest, types.FETCH_REDDIT_POST_COMMENTS_REQUEST);
  testActions(actions.fetchRedditPostCommentsSuccess, types.FETCH_REDDIT_POST_COMMENTS_SUCCESS, 'payload', []);
  testActions(actions.fetchRedditPostCommentsFailure, types.FETCH_REDDIT_POST_COMMENTS_FAILURE, 'payload', {});
});