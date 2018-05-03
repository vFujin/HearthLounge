import * as types from "./types";

const initialState = {
  loading: false,
  editingDeckDescription: ""
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.UPDATE_ACTIVE_DECK_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.UPDATE_ACTIVE_DECK_SUCCESS:
      return {
        loading: false,
        ...payload
      };

    case types.UPDATE_ACTIVE_DECK_FAILURE:
      return {
        loading: false,
        err: payload
      };

    case types.UPDATE_DECK_DESCRIPTION:
      return {
        editingDeckDescription: payload
      };

    default:
      return state;
  }
}