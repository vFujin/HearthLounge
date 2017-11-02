import * as types from "./types";

export function updateActiveDeckRequest(){
  return {
    type: types.UPDATE_ACTIVE_DECK_REQUEST
  }
}

export function updateActiveDeckSuccess(activeDeck){
  return {
    type: types.UPDATE_ACTIVE_DECK_SUCCESS,
    payload: activeDeck
  }
}

export function updateActiveDeckFailure(error){
  return {
    type: types.UPDATE_ACTIVE_DECK_FAILURE,
    payload: error
  }
}

export function updateDeckDescription(text){
  return {
    type: types.UPDATE_DECK_DESCRIPTION,
    payload: text
  }
}
