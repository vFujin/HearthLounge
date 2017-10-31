import * as types from "./types";

const initialState = {
  loading: true
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.FETCH_DECK_AUTHOR_REQUEST:
      return {
          ...state
      };
    case types.FETCH_DECK_AUTHOR_SUCCESS:
      return {
        loading: false,
        ...payload
      };
    case types.FETCH_DECK_AUTHOR_FAILURE:
      return {
        loading: false,
        err: payload
      };

    case types.RESET_ACTIVE_DECK_AUTHOR:
      return {
        loading: true
      };
    default:
      return state;
  }
}