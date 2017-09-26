import * as types from "./types";

const initialState = {
  loading: true
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.FETCH_ACTIVE_DECK_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.FETCH_ACTIVE_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload
      };

    case types.FETCH_ACTIVE_DECK_FAILURE:
      return {
        ...state,
        loading: false,
        err: payload
      };

    case types.RESET_ACTIVE_DECK:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}