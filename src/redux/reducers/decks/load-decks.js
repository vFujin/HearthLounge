const initialState = {
  decks: [],
  adventuresToggled: false
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_DECK_LIST': return {
        ...state,
      decks: action.decks
    };
    case 'TOGGLE_ADVENTURE_FILTERS': return {
      ...state,
      adventuresToggled: action.adventuresToggled
    };
    case 'UPDATE_MODE_FILTER': return {
      ...state,
      activeMode: action.activeMode
    };
    case 'UPDATE_CLASS_FILTER': return {
      ...state,
      activeClass: action.activeClass
    };
    default: return state;
  }
}