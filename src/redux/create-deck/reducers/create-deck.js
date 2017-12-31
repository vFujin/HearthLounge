import {
  EDIT_DECK,
  SHOW_DECK_EDITING_TOOL,
  SIMPLIFY_DECK,
  TOGGLE_DECK_MECHANICS,
  TOGGLE_IMG_READY_DECKLIST, TOGGLE_IMPORTED_DECKSTRING_POPOVER,
  UPDATE_DECKSTRING, UPDATE_IMPORTED_DECKSTRING,
  UPDATE_PLAYERCLASS
} from "../types/create-deck";


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
  importedDeckstringPopover: false
};

export default function(state=initialState, action){
  switch(action.type){
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

    case UPDATE_IMPORTED_DECKSTRING: return {
        ...state,
      importedDeckstring: action.importedDeckstring
    };

    case TOGGLE_IMPORTED_DECKSTRING_POPOVER: return {
        ...state,
      importedDeckstringPopover: action.importedDeckstringPopover
    };

    default: return state;
  }
}