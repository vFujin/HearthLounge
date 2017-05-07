const initialState = {
  decks: []
};

export default function(state=initialState, action){
  switch(action.type){
    case 'FETCH_DECKS': return {
        ...state,
      decks: action.decks
    };
    default: return state;
  }
}