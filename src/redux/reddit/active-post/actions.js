import * as types from "./types";

export function fetchRedditPostRequest(payload){
  return {
    type: types.FETCH_REDDIT_POST_REQUEST,
    payload
  }
}

export function fetchRedditPostSuccess(activePost){
  return {
    type: types.FETCH_REDDIT_POST_SUCCESS,
    payload: activePost
  }
}

export function fetchRedditPostFailure(error){
  return {
    type: types.FETCH_REDDIT_POST_FAILURE,
    payload: error
  }
}