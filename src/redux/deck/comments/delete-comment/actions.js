import * as types from "./types";

export function deleteDeckCommentRequest(payload){
  return {
    type: types.DELETE_DECK_COMMENT_REQUEST,
    payload
  }
}

export function deleteDeckCommentSuccess(payload){
  return {
    type: types.DELETE_DECK_COMMENT_SUCCESS,
    payload
  }
}

export function deleteDeckCommentFailure(error){
  return {
    type: types.DELETE_DECK_COMMENT_FAILURE,
    payload: error
  }
}