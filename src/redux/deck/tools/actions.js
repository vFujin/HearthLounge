import * as types from "./types";

export function toggleDeckEditView(deckEditView){
  return {
    type: types.TOGGLE_DECK_EDIT_VIEW,
    payload: deckEditView
  }
}

export function updateCommentText(payload){
  return {
    type: types.UPDATE_COMMENT_TEXT,
    payload
  }
}
export function toggleCommentBox(payload){
  return {
    type: types.TOGGLE_COMMENT_BOX,
    payload
  }
}

export function togglePreview(payload){
  return {
    type: types.TOGGLE_PREVIEW,
    payload
  }
}