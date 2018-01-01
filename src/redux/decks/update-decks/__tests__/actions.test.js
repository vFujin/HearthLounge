import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#updateDecksActions', () =>{
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

  testActions(actions.fetchDecksUpdateRequest, types.UPDATE_DECKS_REQUEST);
  testActions(actions.fetchDecksUpdateSuccess, types.UPDATE_DECKS_SUCCESS, 'payload', []);
  testActions(actions.fetchDecksUpdateFailure, types.UPDATE_DECKS_FAILURE, 'payload', {});
});