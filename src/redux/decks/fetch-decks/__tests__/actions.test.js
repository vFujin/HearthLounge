import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#fetchDecksActions', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      if(key && state) {
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

  testActions(actions.fetchDecksRequest, types.FETCH_DECKS_REQUEST);
  testActions(actions.fetchDecksSuccess, types.FETCH_DECKS_SUCCESS, 'payload', []);
  testActions(actions.fetchDecksFailure, types.FETCH_DECKS_FAILURE, 'payload', {});
});