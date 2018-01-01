import * as actions from '../deck-options.action';
import * as types from '../../types/deck-options';
import lowerCase from 'lodash/lowerCase';

describe('#createDeckActions', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.updateDeckProperty, types.UPDATE_DECK_PROPERTY, 'props', {});
});