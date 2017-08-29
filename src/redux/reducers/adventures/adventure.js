import {FETCH_CARDBACKS, FETCH_ADVENTURE_DECKS, UPDATE_ADVENTURE_CARDBACKS} from "../../types/adventures/adventures";

const initialState = {
  cardbacks: [],
  adventureCardbacks: []
};

export default function(state=initialState, action){
  switch(action.type){
    case FETCH_ADVENTURE_DECKS: return {
        ...state,
      decks: action.decks
    };
    case FETCH_CARDBACKS: return {
      ...state,
      cardbacks: action.cardbacks
    };
    case UPDATE_ADVENTURE_CARDBACKS: return {
        ...state,
      adventureCardbacks: action.adventureCardbacks
    };
    default: return state;
  }
}