import * as types from "./types";

const initialState = {
  loading: false,
  all: [],
  activeStreamer: ""
};

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case types.FETCH_STREAMERS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case types.FETCH_STREAMERS_SUCCESS: {
      return {
        ...state,
        all: payload,
        loading: false
      }
    }

    case types.FETCH_STREAMERS_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false
      }
    }

    case types.FETCH_STREAMER_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case types.FETCH_STREAMER_SUCCESS: {
      return {
        ...state,
        activeStreamer: payload,
        loading: false
      }
    }

    case types.FETCH_STREAMER_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false
      }
    }

    default: return state;
  }
}

