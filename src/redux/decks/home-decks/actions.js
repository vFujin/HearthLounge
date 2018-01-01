import * as types from "./types";

export function fetchHotDecksRequest(payload){
  return {
    type: types.FETCH_HOT_DECKS_REQUEST,
    payload
  }
}

export function fetchHotDecksSuccess(decks){
  return {
    type: types.FETCH_HOT_DECKS_SUCCESS,
    payload: decks
  }
}

export function fetchHotDecksFailure(error){
  return {
    type: types.FETCH_HOT_DECKS_FAILURE,
    payload: error
  }
}

export function filterHotDecks(payload){
  return {
    type: types.FILTER_HOT_DECKS,
    payload
  }
}