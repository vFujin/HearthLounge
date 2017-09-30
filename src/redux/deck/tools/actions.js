import * as types from "./types";

export function toggleDeckEditView(deckEditView){
  return {
    type: types.TOGGLE_DECK_EDIT_VIEW,
    payload: deckEditView
  }
}