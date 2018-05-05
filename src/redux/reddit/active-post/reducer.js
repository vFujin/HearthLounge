import * as types from './types';

const initialState = {
  loading: false,
};

export default function(state=initialState, {type, payload}) {
  switch (type) {

    case types.FETCH_REDDIT_POST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_REDDIT_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload

      };
    case types.FETCH_REDDIT_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case types.UPDATE_ACTIVE_POST:
      return {
        ...state,
        loading: false,
        post: payload,
        comments: {
          loading: true
        }
      };

    case types.FETCH_REDDIT_POST_COMMENTS_REQUEST:
      return {
        ...state,
        comments: {
          loading: true
        }
      };

    case types.FETCH_REDDIT_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        post: state.post,
        comments: {
          loading: false,
          all: payload
        }
      };
    case types.FETCH_REDDIT_POST_COMMENTS_FAILURE:
      return {
        ...state,
        post: state.post,
        comments: {
          loading: false,
          error: payload
        }
      };

    case types.CLEAR_REDDIT_POST:
      return {
        loading: false
      };

    default:
      return state;
  }
}