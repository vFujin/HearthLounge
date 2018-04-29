import * as types from "./types";

export default function(state = {}, {payload, type}) {
  switch (type) {

    case types.UPDATE_ACTIVE_DECK_COPY:
      return {
          ...payload.deck
      };

    case types.RESET_ACTIVE_DECK_COPY:
      return {};

    default:
      return state;
  }
}