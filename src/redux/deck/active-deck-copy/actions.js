import * as types from "./types";

export function updateActiveDeckCopy(activeDeckCopy){
  return {
    type: types.UPDATE_ACTIVE_DECK_COPY,
    payload: activeDeckCopy
  }
}

export function resetActiveDeckCopy(){
  return {
    type: types.RESET_ACTIVE_DECK_COPY
  }
}