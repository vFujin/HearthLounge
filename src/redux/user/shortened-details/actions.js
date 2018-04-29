import * as types from "./types";

export function fetchShortenedUserDetailsRequest(uid){
  return {
    type: types.FETCH_SHORTENED_USER_DETAILS_REQUEST,
    payload: uid
  }
}

export function fetchShortenedUserDetailsSuccess(details){
  return {
    type: types.FETCH_SHORTENED_USER_DETAILS_SUCCESS,
    payload: details
  }
}

export function fetchShortenedUserDetailsFailure(error){
  return {
    type: types.FETCH_SHORTENED_USER_DETAILS_FAILURE,
    payload: error
  }
}

export function resetShortenedUserDetails(){
  return {
    type: types.RESET_SHORTENED_USER_DETAILS
  }
}