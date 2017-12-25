import * as types from "./types";

export function fetchGameInfoRequest(){
  return {
    type: types.FETCH_GAME_INFO_REQUEST
  }
}

export function fetchGameInfoSuccess(gameInfo){
  return {
    type: types.FETCH_GAME_INFO_SUCCESS,
    payload: gameInfo
  }
}

export function fetchGameInfoFailure(error){
  return {
    type: types.FETCH_GAME_INFO_FAILURE,
    payload: error
  }
}