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
    case 'UPDATE_DECK_FILTERS':
      return {
        ...state,
        ...state.deckFilters,
        ...payload
      };
    default:
      return state;
  }
}