import * as types from "./types";

export function updateWindowWidth(payload){
  return {
    type: types.UPDATE_WINDOW_WIDTH,
    payload
  }
}