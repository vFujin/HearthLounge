import createDeckReducer from '../create-deck';
import * as types from "../../../types/create-deck/create-deck";
import _ from 'lodash';

describe('#createDeckReducers', () =>{

  test('should return initial state', ()=>{
    expect(createDeckReducer(undefined, {})).toEqual({
        filters: false,
        editingTool: false,
        deckMechanics: false,
        imgReadyDecklist: false,
        deck: [],
        deckstring: '',
        simplifiedDeck: {
          cards: {},
          manaCurve: {},
          types: {}
        },
        filtersQuery: {},
        currentCardsLoaded: 35,
        importedDeckstring: '',
        importedDeckstringPopover: false,
        searchBox: false,
        cardSearchValue: '',
        filteredCards: null
      })
  });

  const testStateToggling = (reducerName, state, initialValue, expectedValue, reducer) =>{
    let snakeCasedReducerName = _.snakeCase(`toggle ${reducerName}`);

    test(`should handle ${snakeCasedReducerName}`, () => {
      expect(createDeckReducer(
          {[state]: initialValue},
          {type: reducer}
        )
      ).toEqual(
          {[state]: expectedValue}
      )
    })
  };

  test(`should handle EDIT_DECK`, () => {
    expect(createDeckReducer(
        {deck: []},
        {
          type: types.EDIT_DECK,
          deck: [{cardId: 123}]
        }
    )).toEqual(
        {
          deck: [
            {cardId: 123}
          ]
        }
    );

    expect(createDeckReducer(
        {deck: [{cardId: 123}]},
        {
          type: types.EDIT_DECK,
          deck: [{cardId: 123}, {cardId: 456}]
        }
    )).toEqual(
        {
          deck: [
            {cardId: 123},
            {cardId: 456}
          ]
        }
    )
  });

  testStateToggling('filters', 'filters', false, true, types.TOGGLE_FILTERS);
  testStateToggling('deck editing tool', 'editingTool', false, true, types.SHOW_DECK_EDITING_TOOL);
  testStateToggling('deck mechanics', 'deckMechanics', false, true, types.TOGGLE_DECK_MECHANICS);
  testStateToggling('img ready decklist', 'imgReadyDecklist', false, true, types.TOGGLE_IMG_READY_DECKLIST);
  testStateToggling('imported deckstring popover', 'importedDeckstringPopover', false, true, types.TOGGLE_IMPORTED_DECKSTRING_POPOVER);
  testStateToggling('search box', 'searchBox', false, true, types.TOGGLE_SEARCH_BOX);

});