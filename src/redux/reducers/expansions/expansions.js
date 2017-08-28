import {FETCH_EXPANSION_DECKS} from "../../types/expansions";

const initialState = {
  decks: []
};

export default function(state=initialState, action){
  switch(action.type){
    case FETCH_EXPANSION_DECKS: return {
      ...state,
      decks: action.decks
    };
    default: return state;
  }
}