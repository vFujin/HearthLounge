import * as types from "./types";

const initialState = {
  loading: false
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.POST_DECK_COMMENT_REQUEST:
      return {
        loading: true
      };

    case types.POST_DECK_COMMENT_SUCCESS:
      return {
        loading: false,
        response: {...payload}
      };

    case types.POST_DECK_COMMENT_FAILURE:
      return {
        loading: false,
        err: payload
      };

    case types.RESET_POSTING_LIMIT:
      return state;

    default:
      return state;
  }
}