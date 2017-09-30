import * as types from "./types";

export function updateActiveDeckCopy(activeDeckCopy){
  return {
    type: types.UPDATE_ACTIVE_DECK_COPY,
    payload: activeDeckCopy
  }
}