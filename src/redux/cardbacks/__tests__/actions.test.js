import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#cardbacksActions', () =>{
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

  testActions(actions.fetchCardbacksRequest, types.FETCH_CARDBACKS_REQUEST);
  testActions(actions.fetchCardbacksSuccess, types.FETCH_CARDBACKS_SUCCESS, 'payload', []);
  testActions(actions.fetchCardbacksFailure, types.FETCH_CARDBACKS_FAILURE, 'payload', {});
});