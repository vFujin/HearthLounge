import * as types from '../../types/reddit';

const initialState = {
  posts: {
    loading: true
  },
  activePost: {
    loading: true
  },
  activeCategoryFilter: 'hot'
};

export default function(state=initialState, {type, payload}){
  switch(type){
      /**
       * All Posts
       */
    case types.FETCH_REDDIT_POSTS_REQUEST:
      return {
        ...state,
        posts: {
          loading: true
        }
      };
    case types.FETCH_REDDIT_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: false,
          all: payload
        }
      };
    case types.FETCH_REDDIT_POSTS_FAILURE:
      return {
        ...state,
        posts: {
          loading: false,
          error: payload
        }
      };
      /**
       * Active Post
       */
    case types.FETCH_REDDIT_POST_REQUEST:
      return {
        ...state,
        activePost: {
          loading: true
        }
      };
    case types.FETCH_REDDIT_POST_SUCCESS:
      return {
        ...state,
        activePost: {
          loading: false,
          ...payload
        }
      };
    case types.FETCH_REDDIT_POST_FAILURE:
      return {
        ...state,
        activePost: {
          loading: false,
          error: payload
        }
      };
      /**
       * For already loaded posts
       */
    case types.UPDATE_ACTIVE_POST:
      return {
      ...state,
      activePost: {
        loading: false,
        post: payload
      }
    };
    case types.FETCH_REDDIT_POST_COMMENTS_REQUEST:
      return {
        ...state,
        activePost: {
          post: state.activePost.post,
          comments: {
            loading: true
          }
        }
      };
    case types.FETCH_REDDIT_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        activePost: {
          post: state.activePost.post,
          comments: {
            loading: false,
            all: payload
          }
        }
      };
    case types.FETCH_REDDIT_POST_COMMENTS_FAILURE:
      return {
        ...state,
        activePost: {
          post: state.activePost.post,
          comments: {
            loading: false,
            error: payload
          }
        }
      };

    case types.CLEAR_REDDIT_POST: return {
      ...state,
      activePost: {
        loading: true
      }
    };

    case types.TOGGLE_DOMAIN_FILTER: return {
      ...state,
      activeDomainFilter: payload
    };
    case types.TOGGLE_CATEGORY_FILTER: return {
      ...state,
      activeCategoryFilter: payload
    };
    default: return state;
  }
}