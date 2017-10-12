import * as types from "./types";

const initialState = {
  loading: true
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.FETCH_ACTIVE_DECK_REQUEST:
      return {
          ...state
      };

    case types.FETCH_ACTIVE_DECK_SUCCESS:
      return {
        loading: false,
        ...payload
      };

    case types.FETCH_ACTIVE_DECK_FAILURE:
      return {
        loading: false,
        err: payload
      };

    case types.RESET_ACTIVE_DECK:
      return {
        loading: true
      };
    default:
      return state;
  }
}