import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#deckAuthorActions', () =>{
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

  testActions(actions.fetchDeckAuthorRequest, types.FETCH_DECK_AUTHOR_REQUEST);
  testActions(actions.fetchDeckAuthorSuccess, types.FETCH_DECK_AUTHOR_SUCCESS, 'payload', {});
  testActions(actions.fetchDeckAuthorFailure, types.FETCH_DECK_AUTHOR_FAILURE, 'payload', {});
});