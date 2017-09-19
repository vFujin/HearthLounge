import {
  FETCH_REDDIT_POST_FAILURE,
  FETCH_REDDIT_POST_REQUEST,
  FETCH_REDDIT_POST_SUCCESS,
  CLEAR_REDDIT_POST
} from "../../types/reddit";

export function fetchRedditPostRequest(){
  return {
    type: FETCH_REDDIT_POST_REQUEST
  }
}

export function fetchRedditPostSuccess(activePost){
  return {
    type: FETCH_REDDIT_POST_SUCCESS,
    payload: activePost
  }
}

export function fetchRedditPostFailure(error){
  return {
    type: FETCH_REDDIT_POST_FAILURE,
    payload: error
  }
}

export function clearRedditPostFailure(payload){
  return {
    type: CLEAR_REDDIT_POST,
    payload
  }
}