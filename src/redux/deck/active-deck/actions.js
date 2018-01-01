import * as types from "./types";

export function fetchActiveDeckRequest(payload){
  return {
    type: types.FETCH_ACTIVE_DECK_REQUEST,
    payload
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