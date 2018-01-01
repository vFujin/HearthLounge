import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#cardsActions', () =>{
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

  testActions(actions.fetchCardsRequest, types.FETCH_CARDS_REQUEST);
  testActions(actions.fetchCardsSuccess, types.FETCH_CARDS_SUCCESS, 'payload', []);
  testActions(actions.fetchCardsFailure, types.FETCH_CARDS_FAILURE, 'payload', {});
});