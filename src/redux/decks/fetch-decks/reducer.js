import * as types from "./types";

const initialState = {
  loading: true
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.FETCH_DECKS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_DECKS_SUCCESS:
      return {
        ...state,
        loading: false,
        all: payload
      };
    case types.FETCH_DECKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}