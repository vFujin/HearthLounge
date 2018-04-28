import * as types from "./types";

const initialState = {
  loading: false
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.FETCH_ACTIVE_DECK_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.FETCH_ACTIVE_DECK_COMMENTS_SUCCESS:
      return {
        loading: false,
        all: {...payload}
      };

    case types.FETCH_ACTIVE_DECK_COMMENTS_FAILURE:
      return {
        loading: false,
        err: payload
      };

    case types.RESET_ACTIVE_DECK_COMMENTS:
      return {
        loading: true
      };
    default:
      return state;
  }
}