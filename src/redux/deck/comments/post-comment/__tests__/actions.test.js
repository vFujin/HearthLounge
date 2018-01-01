import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#postCommentActions', () =>{
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

  testActions(actions.postDeckCommentRequest, types.POST_DECK_COMMENT_REQUEST);
  testActions(actions.postDeckCommentSuccess, types.POST_DECK_COMMENT_SUCCESS, 'payload', []);
  testActions(actions.postDeckCommentFailure, types.POST_DECK_COMMENT_FAILURE, 'payload', {});
});