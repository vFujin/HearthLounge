import * as types from "./types";

const initialState = {
  mobileMenuActive: false
};

export default function (state=initialState, {type, payload}) {
  switch (type) {
    case types.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        mobileMenuActive: payload
      };

    default:
      return state;
  }
}