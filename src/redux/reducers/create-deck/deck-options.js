import {UPDATE_DECK_PROPERTY} from "../../types/create-deck/deck-options";

const initialState = {
  deckType: "standard",
  deckArchetype: "quest",
  deckAdventure: '',
  deckBoss: ''
};
export default function(state=initialState, action){
  switch(action.type){
    case UPDATE_DECK_PROPERTY: return {
      ...state,
      ...action.props
    };
    default: return state;
  }
}