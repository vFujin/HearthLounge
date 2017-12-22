import * as types from "./types";

const initialState = {
  loading: false
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.DELETE_DECK_REQUEST:
      return {
          loading: true
      };
    case types.DELETE_DECK_SUCCESS:
      return {
        loading: false,
      };
    case types.DELETE_DECK_FAILURE:
      return {
        loading: false,
        err: payload
      };

    default:
      return state;
  }
}