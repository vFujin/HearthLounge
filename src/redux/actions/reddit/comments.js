import {
  FETCH_REDDIT_POST_COMMENTS_FAILURE,
  FETCH_REDDIT_POST_COMMENTS_REQUEST,
  FETCH_REDDIT_POST_COMMENTS_SUCCESS
} from "../../types/reddit";

export function fetchRedditPostCommentsRequest(){
  return {
    type: FETCH_REDDIT_POST_COMMENTS_REQUEST
  }
}

export function fetchRedditPostCommentsSuccess(activePost){
  return {
    type: FETCH_REDDIT_POST_COMMENTS_SUCCESS,
    payload: activePost
  }
}

export function fetchRedditPostCommentsFailure(error){
  return {
    type: FETCH_REDDIT_POST_COMMENTS_FAILURE,
    payload: error
  }
}