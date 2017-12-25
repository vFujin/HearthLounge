import * as types from "./types";

const initialState = {
  loading: false
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_GAME_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_GAME_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload
      };
    case types.FETCH_GAME_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}