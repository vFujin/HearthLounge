import * as types from "./types";

export function fetchShortenedUserDetailsRequest(){
  return {
    type: types.FETCH_SHORTENED_USER_DETAILS_REQUEST
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