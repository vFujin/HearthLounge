import {
  FETCH_REDDIT_POSTS_FAILURE,
  FETCH_REDDIT_POSTS_REQUEST,
  FETCH_REDDIT_POSTS_SUCCESS
} from "../../types/reddit";

export function fetchRedditPostsRequest(){
  return {
    type: FETCH_REDDIT_POSTS_REQUEST
  }
}

export function fetchRedditPostsSuccess(posts){
  return {
    type: FETCH_REDDIT_POSTS_SUCCESS,
    payload: posts
  }
}

export function fetchRedditPostsFailure(error){
  return {
    type: FETCH_REDDIT_POSTS_FAILURE,
    payload: error
  }
}