import * as types from "../types/create-deck";


const initialState = {
  editingTool: true,
  deckMechanics: false,
  imgReadyDecklist: false,
  deck: [],
  deckstring: '',
  simplifiedDeck: {
    cards: {},
    manaCurve: {},
    types: {}
  },
  importedDeckstring: '',
  importedDeckstringPopover: false,
  activeCreateDeckMobileTab: "cards"
};

export default function(state=initialState, action){
  switch(action.type){
    case types.SHOW_DECK_EDITING_TOOL: return {
      ...state,
      editingTool: action.editingTool
    };

    case types.TOGGLE_DECK_MECHANICS: return {
      ...state,
      deckMechanics: action.deckMechanics
    };

    case types.TOGGLE_IMG_READY_DECKLIST: return {
      ...state,
      imgReadyDecklist: action.imgReadyDecklist
    };

    case types.EDIT_DECK: return {
      ...state,
      deck: action.deck,
    };

    case types.UPDATE_DECKSTRING: return {
      ...state,
      deckstring: action.deckstring,
    };

    case types.SIMPLIFY_DECK: return {
        ...state,
      simplifiedDeck: action.simplifiedDeck
    };

    case types.UPDATE_PLAYERCLASS: return {
        ...state,
      playerClass: action.playerClass
    };

    case types.UPDATE_IMPORTED_DECKSTRING: return {
        ...state,
      importedDeckstring: action.importedDeckstring
    };

    case types.TOGGLE_IMPORTED_DECKSTRING_POPOVER: return {
        ...state,
      importedDeckstringPopover: action.importedDeckstringPopover
    };

    case types.CHANGE_ACTIVE_CREATE_DECK_MOBILE_TAB: return {
      ...state,
      activeCreateDeckMobileTab: action.tab
    };

    default: return state;
  }
}