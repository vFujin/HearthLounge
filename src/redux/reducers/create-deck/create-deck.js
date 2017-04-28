const initialState = {
  filters: false,
  editingTool: false,
  deckMechanics: false,
  deck: [],
  summarizedDeck: []
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
    case 'EDIT_DECK': return {
      ...state,
      deck: action.deck,
      summarizedDeck: action.summarizedDeck
    };
    default: return state;
  }
}