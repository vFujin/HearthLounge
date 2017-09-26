import * as types from "../../types/decks/deck-view";

export function fetchDeckRequest(){
  return {
    type: types.FETCH_DECK_REQUEST
  }
}

export function fetchDeckSuccess(deck){
  return {
    type: types.FETCH_DECK_SUCCESS,
    payload: deck
  }
}

export function fetchDeckFailure(error){
  return {
    type: types.FETCH_DECK_FAILURE,
    payload: error
  }
}