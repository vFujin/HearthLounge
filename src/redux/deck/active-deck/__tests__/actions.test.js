import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#activeDeckActions', () =>{
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

  testActions(actions.fetchActiveDeckRequest, types.FETCH_ACTIVE_DECK_REQUEST);
  testActions(actions.fetchActiveDeckSuccess, types.FETCH_ACTIVE_DECK_SUCCESS, 'payload', {});
  testActions(actions.fetchActiveDeckFailure, types.FETCH_ACTIVE_DECK_FAILURE, 'payload', {});
});