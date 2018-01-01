import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#redditActivePostActions', () =>{
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

  testActions(actions.fetchActiveUserDecksRequest, types.FETCH_ACTIVE_USER_DECKS_REQUEST);
  testActions(actions.fetchActiveUserDecksSuccess, types.FETCH_ACTIVE_USER_DECKS_SUCCESS, 'payload', []);
  testActions(actions.fetchActiveUserDecksFailure, types.FETCH_ACTIVE_USER_DECKS_FAILURE, 'payload', {});
});