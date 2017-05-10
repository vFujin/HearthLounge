const initialState = {
  all: [],
  name: [],
  mechanics: [],
  faction: [],
  race: [],
  type: [],
  cost: [],
  cardSet: []
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_CARDS': return {
      ...state,
      ...action.cards
    };

    default: return state;
  }
}