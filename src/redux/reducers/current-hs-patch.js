import {FETCH_PATCH_SUCCESS, FETCH_PATCH_FAILURE} from "../types/current-hs-patch";

const initialState = {
  current: null
};

export default function(state=initialState, action) {
  switch (action.type) {
    case FETCH_PATCH_SUCCESS:
      return {
        ...state,
        current: action.current
      };
    case FETCH_PATCH_FAILURE:
      return {
        ...state,
        current: action.err
      };
    default:
      return state;
  }
}