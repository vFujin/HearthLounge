import * as types from "../types/reddit";

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

// export function clearRedditPosts(posts){
//   type:
// }

export function fetchRedditPostRequest(){
  return {
    type: types.FETCH_REDDIT_POST_REQUEST
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

export function fetchRedditPostCommentsRequest(){
  return {
    type: types.FETCH_REDDIT_POST_COMMENTS_REQUEST
  }
}

export function fetchRedditPostCommentsSuccess(activePost){
  return {
    type: types.FETCH_REDDIT_POST_COMMENTS_SUCCESS,
    payload: activePost
  }
}

export function fetchRedditPostCommentsFailure(error){
  return {
    type: types.FETCH_REDDIT_POST_COMMENTS_FAILURE,
    payload: error
  }
}