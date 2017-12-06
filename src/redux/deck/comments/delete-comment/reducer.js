import * as types from "./types";

const initialState = {
  loading: false
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.DELETE_DECK_COMMENT_REQUEST:
      return {
        loading: true
      };

    case types.DELETE_DECK_COMMENT_SUCCESS:
      return {
        loading: false,
        response: {...payload}
      };

    case types.DELETE_DECK_COMMENT_FAILURE:
      return {
        loading: false,
        err: payload
      };

    default:
      return state;
  }
}