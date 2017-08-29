import createAdventureReducer from '../adventure';
import * as types from "../../../types/adventures/adventures";
import {cardbacksMock, decksMock} from "../../../../utils/test-mocks/data";
// import _ from 'lodash';
// import {updateAdventureCardbacks} from "../../../actions/adventures/adventures";
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

  testFetching('decks', types.FETCH_ADVENTURE_DECKS, decksMock());
  testFetching('cardbacks', types.FETCH_CARDBACKS, cardbacksMock());
});