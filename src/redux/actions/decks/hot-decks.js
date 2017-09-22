
import * as types from "../../types/decks";

export function fetchHotDecksRequest(){
  return {
    type: types.FETCH_HOT_DECKS_REQUEST
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