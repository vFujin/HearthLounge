import createAdventureReducer from '../adventure';
import * as types from "../../../types/adventures/boss";
import {fakedCardbacksArr} from "../__mockData__/cardbacks";
import {fakedDecksArr} from "../__mockData__/decks";

describe('#createDeckReducers', () => {

  test('should return initial state', () => {
    expect(createAdventureReducer(undefined, {})).toEqual({
      cardbacks: [],
      adventureCardbacks: []
    })
  });

  const testFetching = (state, type, fakedData) => {
    test(`should fetch adventure ${state}`, () => {
      expect(createAdventureReducer(
          {[state]: fakedData},
          type
          )
      ).toEqual(
          {
            [state]: fakedData
          }
      )
    });
  };

  testFetching('decks', types.FETCH_ADVENTURE_DECKS, fakedDecksArr());
  testFetching('cardbacks', types.FETCH_CARDBACKS, fakedCardbacksArr());
});