import * as types from './types';

export function fetchStreamersRequest(){
  return {
    type: types.FETCH_STREAMERS_REQUEST
  }
}

export function fetchStreamersSuccess(payload){
  return {
    type: types.FETCH_STREAMERS_SUCCESS,
    payload
  }
}

export function fetchStreamersFailure(payload){
  return {
    type: types.FETCH_STREAMERS_FAILURE,
    payload
  }
}
