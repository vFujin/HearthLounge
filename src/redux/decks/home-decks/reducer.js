import * as types from "./types";

const initialState = {
  loading: true,
  deckFilters: {}
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_HOT_DECKS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_HOT_DECKS_SUCCESS:
      return {
        ...state,
        loading: false,
        all: payload
      };
    case types.FETCH_HOT_DECKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case types.FILTER_HOT_DECKS:
      return {
        ...state,
        deckFilters: {
          // ...state.deckFilters, TODO: when there will be proper backend that should be uncommented
          ...payload
        }
      };
    default:
      return state;
  }
}