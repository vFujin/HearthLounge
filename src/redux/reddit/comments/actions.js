import * as types from "./types";

export function fetchRedditPostCommentsRequest(payload){
  return {
    type: types.FETCH_REDDIT_POST_COMMENTS_REQUEST,
    payload
  }
}

export function fetchRedditPostCommentsSuccess(post){
  return {
    type: types.FETCH_REDDIT_POST_COMMENTS_SUCCESS,
    payload: post
  }
}

export function fetchRedditPostCommentsFailure(error){
  return {
    type: types.FETCH_REDDIT_POST_COMMENTS_FAILURE,
    payload: error
  }
}