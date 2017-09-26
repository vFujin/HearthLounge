const initialState = {
  users: [],
  adventuresToggled: false
};

export default function(state=initialState, {type, payload}){
  switch(type){
    case 'UPDATE_DECK_LIST': return {
        ...state,
        decks: payload
    };
    case 'UPDATE_USER_LIST': return {
        ...state,
      users: payload
    };
    case 'UPDATE_ACTIVE_DECK': return {
      ...state,
      currentDeck: payload
    };
    case 'TOGGLE_ADVENTURE_FILTERS': return {
      ...state,
      adventuresToggled: payload
    };
    case 'UPDATE_MODE_FILTER': return {
      ...state,
      activeMode: payload
    };
    case 'UPDATE_ADVENTURE_FILTER': return {
      ...state,
      activeAdventure: payload
    };
    case 'UPDATE_CLASS_FILTER': return {
      ...state,
      activeClass: payload
    };
    default: return state;
  }
}