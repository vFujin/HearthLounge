import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#deleteCommentActions', () =>{
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

  testActions(actions.deleteDeckCommentRequest, types.DELETE_DECK_COMMENT_REQUEST);
  testActions(actions.deleteDeckCommentSuccess, types.DELETE_DECK_COMMENT_SUCCESS, 'payload', true);
  testActions(actions.deleteDeckCommentFailure, types.DELETE_DECK_COMMENT_FAILURE, 'payload', false);
});