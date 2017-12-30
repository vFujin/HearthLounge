import * as types from "./types";

const initialState = {
  loading: true
};


export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_CARDBACKS_REQUEST:
      return {
        ...state
      };
    case types.FETCH_CARDBACKS_SUCCESS:
      return {
        loading: false,
        ...payload
      };
    case types.FETCH_CARDBACKS_FAILURE:
      return {
        loading: false,
        error: payload
      };

    default:
      return state;
  }
}