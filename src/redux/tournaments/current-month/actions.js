import * as types from './types';

export function fetchTournamentsRequest(){
  return {
    type: types.FETCH_TOURNAMENTS_REQUEST
  }
}

export function fetchTournamentsSuccess(payload){
  return {
    type: types.FETCH_TOURNAMENTS_SUCCESS,
    payload
  }
}

export function fetchTournamentsFailure(payload){
  return {
    type: types.FETCH_TOURNAMENTS_FAILURE,
    payload
  }
}