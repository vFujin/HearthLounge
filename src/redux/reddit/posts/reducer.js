import * as types from './types';

const initialState = {
  loading: false,
  domain: {
    active: "",
    obj: {}
  },
  activeCategory: 'hot'
};

export default function(state=initialState, {type, payload}) {
  switch (type) {

    case types.FETCH_REDDIT_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.FETCH_REDDIT_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        all: payload
      };

    case types.FETCH_REDDIT_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case types.SELECT_REDDIT_DOMAIN:
      return {
        ...state,
        domain: payload
      };

    case types.SELECT_REDDIT_CATEGORY:
      return {
        ...state,
        activeCategory: payload
      };

    case types.RESET_REDDIT_STATE:
      return {
        ...initialState,
        all: state.all
      };
    default:
      return state;
  }
}