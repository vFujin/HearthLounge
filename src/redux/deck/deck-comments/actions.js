import * as types from "./types";

export function fetchActiveDeckCommentsRequest(){
  return {
    type: types.FETCH_ACTIVE_DECK_COMMENTS_REQUEST
  }
}

export function fetchActiveDeckCommentsSuccess(comments){
  return {
    type: types.FETCH_ACTIVE_DECK_COMMENTS_SUCCESS,
    payload: comments
  }
}

export function fetchActiveDeckCommentsFailure(error){
  return {
    type: types.FETCH_ACTIVE_DECK_COMMENTS_FAILURE,
    payload: error
  }
}

export function resetActiveDeckComments(){
  return {
    type: types.RESET_ACTIVE_DECK_COMMENTS
  }
}