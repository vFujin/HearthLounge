import * as types from "./types";

export function fetchRedditPostsRequest(){
  return {
    type: types.FETCH_REDDIT_POSTS_REQUEST
  }
}

export function fetchRedditPostsSuccess(posts){
  return {
    type: types.FETCH_REDDIT_POSTS_SUCCESS,
    payload: posts
  }
}

export function fetchRedditPostsFailure(error){
  return {
    type: types.FETCH_REDDIT_POSTS_FAILURE,
    payload: error
  }
}

export function selectRedditDomain(domain){
  return {
    type: types.SELECT_REDDIT_DOMAIN,
    payload: domain
  }
}

export function selectRedditCategory(category){
  return {
    type: types.SELECT_REDDIT_CATEGORY,
    payload: category
  }
}

export function resetRedditState(){
  return {
    type: types.RESET_REDDIT_STATE
  }
}