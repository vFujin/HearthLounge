import * as types from "./types";

export function deleteDeckRequest(payload){
  return {
    type: types.DELETE_DECK_REQUEST,
    payload
  }
}

export function deleteDeckSuccess(){
  return {
    type: types.DELETE_DECK_SUCCESS
  }
}

export function deleteDeckFailure(error){
  return {
    type: types.DELETE_DECK_FAILURE,
    payload: error
  }
}