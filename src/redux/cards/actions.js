import * as types from "./types";

export function fetchCardsRequest(){
  return {
    type: types.FETCH_CARDS_REQUEST
  }
}

export function fetchCardsSuccess(cards){
  return {
    type: types.FETCH_CARDS_SUCCESS,
    payload: cards
  }
}

export function fetchCardsFailure(error){
  return {
    type: types.FETCH_CARDS_FAILURE,
    payload: error
  }
}