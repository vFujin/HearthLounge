import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#fetchShortenedUserDetailsActions', () =>{
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

  testActions(actions.fetchShortenedUserDetailsRequest, types.FETCH_SHORTENED_USER_DETAILS_REQUEST);
  testActions(actions.fetchShortenedUserDetailsSuccess, types.FETCH_SHORTENED_USER_DETAILS_SUCCESS, 'payload', {});
  testActions(actions.fetchShortenedUserDetailsFailure, types.FETCH_SHORTENED_USER_DETAILS_FAILURE, 'payload', {});
});