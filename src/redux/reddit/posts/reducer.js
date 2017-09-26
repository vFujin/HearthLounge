import * as types from './types';

const initialState = {
  loading: true,
  activeCategoryFilter: 'hot'
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

    case types.TOGGLE_DOMAIN_FILTER:
      return {
        ...state,
        activeDomainFilter: payload
      };
    case types.TOGGLE_CATEGORY_FILTER:
      return {
        ...state,
        activeCategoryFilter: payload
      };
    default:
      return state;
  }
}