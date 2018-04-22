import * as types from "./types";

export function deleteUserRequest (payload){
  return {
    type: types.DELETE_USER_REQUEST,
    payload
  }
}

export function deleteUserSuccess (){
  return {
    type: types.DELETE_USER_SUCCESS
  }
}

export function deleteUserFailure (error){
  return {
    type: types.DELETE_USER_FAILURE,
    payload: error
  }
}