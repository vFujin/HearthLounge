import * as types from "../types/current-hs-patch";

export function fetchPatchRequest(){
  return {
    type: types.FETCH_PATCH_REQUEST
  }
}

export function fetchPatchSuccess(current){
  return {
    type: types.FETCH_PATCH_SUCCESS,
    current
  }
}

export function fetchPatchFailure(error){
  return {
    type: types.FETCH_PATCH_FAILURE,
    error
  }
}