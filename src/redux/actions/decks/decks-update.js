import * as types from "../../types/decks";

export function fetchDecksUpdateRequest(){
  return {
    type: types.UPDATE_DECKS_REQUEST
  }
}

export function fetchDecksUpdateSuccess(decks){
  return {
    type: types.UPDATE_DECKS_SUCCESS,
    payload: decks
  }
}

export function fetchDecksUpdateFailure(error){
  return {
    type: types.UPDATE_DECKS_FAILURE,
    payload: error
  }
}