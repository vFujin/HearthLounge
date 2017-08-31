import * as types from "../types/current-hs-patch";

const initialState = {
  current: null
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_PATCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_PATCH_SUCCESS:
      return {
        ...state,
        loading: false,
        current: payload
      };
    case types.FETCH_PATCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}