import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#deleteDeckActions', () =>{
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

  testActions(actions.deleteDeckRequest, types.DELETE_DECK_REQUEST, 'payload', "fakeId123");
  testActions(actions.deleteDeckSuccess, types.DELETE_DECK_SUCCESS);
  testActions(actions.deleteDeckFailure, types.DELETE_DECK_FAILURE, 'payload', {});
});