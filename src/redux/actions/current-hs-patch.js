import fetch from 'isomorphic-fetch';
import {FETCH_PATCH_REQUEST, FETCH_PATCH_SUCCESS, FETCH_PATCH_FAILURE} from "../types/current-hs-patch";
import {MashapeKey} from "../../keys";

export function fetchPatchRequest(){
  return {
    type: FETCH_PATCH_REQUEST
  }
}

export function fetchPatchSuccess(current){
  return {
    type: FETCH_PATCH_SUCCESS,
    current
  }
}

export function fetchPatchFailure(err){
  return {
    type: FETCH_PATCH_FAILURE,
    err
  }
}

export function fetchPatch(dispatch) {
  dispatch(fetchPatchRequest());

  return fetch('https://omgvamp-hearthstone-v1.p.mashape.com/info', {
    headers: {
      'X-Mashape-Key': MashapeKey
    }
  })
      .then(res => res.json())
      .then(data => dispatch(fetchPatchSuccess(data.patch)))
      .catch(err => dispatch(fetchPatchFailure(err)))
}