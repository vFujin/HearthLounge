import * as types from "./types";

export function fetchAllUsersRequest (){
  return {
    type: types.FETCH_ALL_USERS_REQUEST
  }
}

export function fetchAllUsersSuccess (users){
  return {
    type: types.FETCH_ALL_USERS_SUCCESS,
    payload: users
  }
}

export function fetchAllUsersFailure (error){
  return {
    type: types.FETCH_ALL_USERS_FAILURE,
    payload: error
  }
}