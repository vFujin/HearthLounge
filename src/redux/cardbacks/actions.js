import * as types from "./types";

export function fetchCardbacksRequest(){
  return {
    type: types.FETCH_CARDBACKS_REQUEST
  }
}

export function fetchCardbacksSuccess(cardbacks){
  return {
    type: types.FETCH_CARDBACKS_SUCCESS,
    payload: cardbacks
  }
}

export function fetchCardbacksFailure(error){
  return {
    type: types.FETCH_CARDBACKS_FAILURE,
    payload: error
  }
}