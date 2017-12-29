import * as types from "./types";

const initialState = {
  cards: {
    loading: true,
    allCards: []
  }
};

const getUniqueCardMechanics = payload => {
  const mechanics = Object.values(payload)
    .reduce((a, b) => a.concat(b))
    .filter(c=> c.mechanics)
    .map(c => c.mechanics[0].name);
  return [...new Set(mechanics)];
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_CARDS_REQUEST:
      return {
        ...state,
        cards: {
          loading: true
        }
      };
    case types.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: {
          loading: false,
          allCards: Object.values(payload).reduce((a, b) => a.concat(b)),
          mechanics: getUniqueCardMechanics(payload),
          ...payload
        }
      };
    case types.FETCH_CARDS_FAILURE:
      return {
        ...state,
        cards: {
          loading: false,
          error: payload
        }
      };

    default:
      return state;
  }
}