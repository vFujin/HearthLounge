import {UPDATE_DECK_PROPERTY} from "../../types/create-deck/deck-options";

const initialState = {
  deckMode: "standard",
  deckArchetype: "quest",
  deckAdventure: '',
  deckBoss: '',
  deckText: '',
  deckTextControlled: '',
  isPrivate: false
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