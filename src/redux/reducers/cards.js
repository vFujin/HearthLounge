const initialState = {
  cards: {
    all: [],
    name: [],
    mechanics: [],
    faction: [],
    race: [],
    type: [],
    cost: [],
    cardSet: []
  }
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_CARDS': return {
      ...state,
      cards: action.cards
    };

    default: return state;
  }
}