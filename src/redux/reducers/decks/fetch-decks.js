const initialState = {
  decks: []
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_DECK_LIST': return {
        ...state,
      decks: action.decks
    };
    default: return state;
  }
}