import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#homeDecksActions', () =>{
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

  testActions(actions.fetchHotDecksRequest, types.FETCH_HOT_DECKS_REQUEST);
  testActions(actions.fetchHotDecksSuccess, types.FETCH_HOT_DECKS_SUCCESS, 'payload', []);
  testActions(actions.fetchHotDecksFailure, types.FETCH_HOT_DECKS_FAILURE, 'payload', {});
  testActions(actions.filterHotDecks, types.FILTER_HOT_DECKS, 'payload', {});
});