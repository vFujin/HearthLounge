import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#fetchCommentActions', () =>{
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

  testActions(actions.fetchActiveDeckCommentsRequest, types.FETCH_ACTIVE_DECK_COMMENTS_REQUEST);
  testActions(actions.fetchActiveDeckCommentsSuccess, types.FETCH_ACTIVE_DECK_COMMENTS_SUCCESS, 'payload', []);
  testActions(actions.fetchActiveDeckCommentsFailure, types.FETCH_ACTIVE_DECK_COMMENTS_FAILURE, 'payload', {});
  testActions(actions.resetActiveDeckComments, types.RESET_ACTIVE_DECK_COMMENTS);
});