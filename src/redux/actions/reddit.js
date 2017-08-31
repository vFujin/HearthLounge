import * as types from "../types/reddit";

export function fetchRedditPostsRequest(){
  return {
    type: types.FETCH_REDDIT_POSTS_REQUEST
  }
}

export function fetchRedditPostsSuccess(posts){
  return {
    type: types.FETCH_REDDIT_POSTS_SUCCESS,
    posts
  }
}

export function fetchRedditPostsFailure(error){
  return {
    type: types.FETCH_REDDIT_POSTS_FAILURE,
    error
  }
}