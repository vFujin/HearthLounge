import * as types from "./types";

export function updateUserRequest (payload){
  return {
    type: types.UPDATE_USER_REQUEST,
    payload
  }
}

export function updateUserSuccess (){
  return {
    type: types.UPDATE_USER_SUCCESS
  }
}

export function updateUserFailure (error){
  return {
    type: types.UPDATE_USER_FAILURE,
    payload: error
  }
}