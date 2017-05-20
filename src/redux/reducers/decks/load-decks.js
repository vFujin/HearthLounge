const initialState = {
  decks: [],
  users: [],
  adventuresToggled: false
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_DECK_LIST': return {
        ...state,
      decks: action.decks
    };
    case 'UPDATE_USER_LIST': return {
        ...state,
      users: action.users
    };
    case 'UPDATE_ACTIVE_DECK': return {
      ...state,
      currentDeck: action.currentDeck
    };
    case 'TOGGLE_ADVENTURE_FILTERS': return {
      ...state,
      adventuresToggled: action.adventuresToggled
    };
    case 'UPDATE_MODE_FILTER': return {
      ...state,
      activeMode: action.activeMode
    };
    case 'UPDATE_ADVENTURE_FILTER': return {
      ...state,
      activeAdventure: action.activeAdventure
    };
    case 'UPDATE_CLASS_FILTER': return {
      ...state,
      activeClass: action.activeClass
    };
    default: return state;
  }
}