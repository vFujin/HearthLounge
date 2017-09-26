import * as types from "./types";

export function fetchDeckAuthorRequest(){
  return {
    type: types.FETCH_DECK_AUTHOR_REQUEST
  }
}

export function fetchDeckAuthorSuccess(deckAuthor){
  return {
    type: types.FETCH_DECK_AUTHOR_SUCCESS,
    payload: deckAuthor
  }
}

export function fetchDeckAuthorFailure(error){
  return {
    type: types.FETCH_DECK_AUTHOR_FAILURE,
    payload: error
  }
}