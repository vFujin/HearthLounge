import * as types from "./types";

export function fetchActiveDeckRequest(){
  return {
    type: types.FETCH_ACTIVE_DECK_REQUEST
  }
}

export function fetchActiveDeckSuccess(activeDeck){
  return {
    type: types.FETCH_ACTIVE_DECK_SUCCESS,
    payload: activeDeck
  }
}

export function fetchActiveDeckFailure(error){
  return {
    type: types.FETCH_ACTIVE_DECK_FAILURE,
    payload: error
  }
}