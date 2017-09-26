import * as types from "./types";

export function fetchDecksRequest(){
  return {
    type: types.FETCH_DECKS_REQUEST
  }
}

export function fetchDecksSuccess(decks){
  return {
    type: types.FETCH_DECKS_SUCCESS,
    payload: decks
  }
}

export function fetchDecksFailure(error){
  return {
    type: types.FETCH_DECKS_FAILURE,
    payload: error
  }
}