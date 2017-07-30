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
  currentCardsLoaded: 35
};

export default function(state=initialState, action){
  switch(action.type){
    case 'TOGGLE_FILTERS': return {
      ...state,
      filters: action.filters
    };
    case 'SHOW_DECK_EDITING_TOOL': return {
      ...state,
      editingTool: action.editingTool
    };
    case 'TOGGLE_DECK_MECHANICS': return {
      ...state,
      deckMechanics: action.deckMechanics
    };
    case 'TOGGLE_IMG_READY_DECKLIST': return {
      ...state,
      imgReadyDecklist: action.imgReadyDecklist
    };
    case 'UPDATE_URL': return {
      ...state,
      deckUrl: action.deckUrl
    };
    case 'EDIT_DECK': return {
      ...state,
      deck: action.deck,
    };
    case 'UPDATE_DECKSTRING': return {
      ...state,
      deckstring: action.deckstring,
    };
    case 'SIMPLIFY_DECK': return {
        ...state,
      simplifiedDeck: action.simplifiedDeck
    };
    case 'UPDATE_PLAYERCLASS': return {
        ...state,
      playerClass: action.playerClass
    };
    case 'UPDATE_CURRENT_CARDS_LOADED': return {
        ...state,
      currentCardsLoaded: action.currentCardsLoaded
    };
    default: return state;
  }
}