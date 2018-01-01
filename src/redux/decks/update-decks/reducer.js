import * as types from "./types";

const initialState = {
  loading: false
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.UPDATE_DECKS_REQUEST:{
      return {
        ...state,
        loading: true
      }
    }
    case types.UPDATE_DECKS_SUCCESS:
      return {
        ...state,
        loading: false,
        all: {
          ...state.decks.all,
          ...payload
        }
      };
    case types.UPDATE_DECKS_FAILURE:
      return {
        ...state,
        loading: false,
        all: state.decks.all,
        updateErr: payload
      };
    default:
      return state;
  }
}