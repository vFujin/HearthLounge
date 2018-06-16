import * as types from '../types';

export function fetchStreamerRequest(payload){
  return {
    type: types.FETCH_STREAMER_REQUEST,
    payload
  }
}

export function fetchStreamerSuccess(payload){
  return {
    type: types.FETCH_STREAMER_SUCCESS,
    payload
  }
}

export function fetchStreamerFailure(payload){
  return {
    type: types.FETCH_STREAMER_FAILURE,
    payload
  }
}

export function resetActiveStreamer() {
  return {
    type: types.RESET_ACTIVE_STREAMER
  }
}
