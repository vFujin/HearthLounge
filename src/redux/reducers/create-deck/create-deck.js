import {
  CARD_SEARCH_VALUE,
  EDIT_DECK, FILTER_CARDS,
  SHOW_DECK_EDITING_TOOL,
  SIMPLIFY_DECK,
  TOGGLE_DECK_MECHANICS,
  TOGGLE_FILTERS,
  TOGGLE_IMG_READY_DECKLIST, TOGGLE_IMPORTED_DECKSTRING_POPOVER, TOGGLE_SEARCH_BOX,
  UPDATE_CURRENT_CARDS_LOADED, UPDATE_DECK_CREATION_FILTERS,
  UPDATE_DECKSTRING, UPDATE_IMPORTED_DECKSTRING,
  UPDATE_PLAYERCLASS,
  UPDATE_URL
} from "../../types/create-deck/create-deck";


const initialState = {
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
};

export default function(state=initialState, action){
  switch(action.type){
    case TOGGLE_FILTERS: return {
      ...state,
      filters: action.filters
    };

    case SHOW_DECK_EDITING_TOOL: return {
      ...state,
      editingTool: action.editingTool
    };

    case TOGGLE_DECK_MECHANICS: return {
      ...state,
      deckMechanics: action.deckMechanics
    };

    case TOGGLE_IMG_READY_DECKLIST: return {
      ...state,
      imgReadyDecklist: action.imgReadyDecklist
    };

    case UPDATE_URL: return {
      ...state,
      deckUrl: action.deckUrl
    };

    case EDIT_DECK: return {
      ...state,
      deck: action.deck,
    };

    case UPDATE_DECKSTRING: return {
      ...state,
      deckstring: action.deckstring,
    };

    case SIMPLIFY_DECK: return {
        ...state,
      simplifiedDeck: action.simplifiedDeck
    };

    case UPDATE_PLAYERCLASS: return {
        ...state,
      playerClass: action.playerClass
    };

    case UPDATE_CURRENT_CARDS_LOADED: return {
        ...state,
      currentCardsLoaded: action.currentCardsLoaded
    };

    case UPDATE_DECK_CREATION_FILTERS: return{
      ...state,
      filtersQuery: {...action.deckCreationFilters}
    };

    case UPDATE_IMPORTED_DECKSTRING: return {
        ...state,
      importedDeckstring: action.importedDeckstring
    };

    case TOGGLE_IMPORTED_DECKSTRING_POPOVER: return {
        ...state,
      importedDeckstringPopover: action.importedDeckstringPopover
    };

    case TOGGLE_SEARCH_BOX: return {
        ...state,
      searchBox: action.searchBox
    };

    case CARD_SEARCH_VALUE: return {
        ...state,
      cardSearchValue: action.cardSearchValue
    };

    case FILTER_CARDS: return {
      ...state,
      filteredCards: action.filteredCards
    };

    default: return state;
  }
}