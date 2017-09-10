import * as types from "../types/cards";

const initialState = {
  cards: {
    loading: true
  }
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
      // case 'CURRENT_CARDS_LOADED': return {
      //     ...state,
      //   currentCardsLoaded: action.currentCardsLoaded
      // };

    default:
      return state;
  }
}