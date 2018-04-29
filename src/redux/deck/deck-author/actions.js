import * as types from "./types";

export function fetchDeckAuthorRequest(authorId){
  return {
    type: types.FETCH_DECK_AUTHOR_REQUEST,
    payload: authorId
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

export function resetDeckAuthor(){
  return {
    type: types.RESET_ACTIVE_DECK_AUTHOR
  }
}