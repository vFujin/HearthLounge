import * as actions from '../adventures';
import * as types from '../../../types/adventures/adventures';
import lowerCase from 'lodash/lowerCase';
import {decksMock} from "../../../../utils/test-mocks/data";

describe('#createAdventureActions', () => {
  const testActions = (action, type, key, state) => {
    test(`should create an action to ${lowerCase(type)}`, () => {
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.fetchAdventureDecks, types.FETCH_ADVENTURE_DECKS, 'decks', decksMock());
  testActions(actions.fetchCardbacks, types.FETCH_CARDBACKS, 'cardbacks', {});
  testActions(actions.updateAdventureCardbacks, types.UPDATE_ADVENTURE_CARDBACKS, 'adventureCardbacks', []);
});