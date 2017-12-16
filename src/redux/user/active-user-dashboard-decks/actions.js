import * as types from "./types";

export function fetchActiveUserDecksRequest(payload){
  return {
    type: types.FETCH_ACTIVE_USER_DECKS_REQUEST,
    payload
  }
}

export function fetchActiveUserDecksSuccess(decks){
  return {
    type: types.FETCH_ACTIVE_USER_DECKS_SUCCESS,
    payload: decks
  }
}

export function fetchActiveUserDecksFailure(error){
  return {
    type: types.FETCH_ACTIVE_USER_DECKS_FAILURE,
    payload: error
  }
}