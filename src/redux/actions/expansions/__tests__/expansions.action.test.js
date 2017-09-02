import * as actions from '../expansions.action';
import * as types from '../../../types/expansions';
import lowerCase from 'lodash/lowerCase';
import {decksMock} from "../../../../utils/test-mocks/data";

describe('#createExpansionAdventureActions', () => {
  const testActions = (action, type, key, state) => {
    test(`should create an action to ${lowerCase(type)}`, () => {
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.fetchAdventureDecks, types.FETCH_EXPANSION_DECKS, 'decks', decksMock());
});