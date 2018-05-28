import * as types from './types';

export function fetchUpcomingTournamentsRequest(){
  return {
    type: types.FETCH_UPCOMING_TOURNAMENTS_REQUEST
  }
}

export function fetchUpcomingTournamentsSuccess(payload){
  return {
    type: types.FETCH_UPCOMING_TOURNAMENTS_SUCCESS,
    payload
  }
}

export function fetchUpcomingTournamentsFailure(payload){
  return {
    type: types.FETCH_UPCOMING_TOURNAMENTS_FAILURE,
    payload
  }
}