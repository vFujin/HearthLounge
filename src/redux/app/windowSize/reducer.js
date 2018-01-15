import * as types from "./types";

const initialState = {
  windowWidth: window.innerWidth
};

export default function (state=initialState, {type, payload}) {
  switch (type) {
    case types.UPDATE_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: payload
      };

    default:
      return state;
  }
}