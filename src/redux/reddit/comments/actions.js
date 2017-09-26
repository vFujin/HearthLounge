import * as types from "./types";

export function fetchRedditPostCommentsRequest(){
  return {
    type: types.FETCH_REDDIT_POST_COMMENTS_REQUEST
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