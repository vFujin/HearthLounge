import * as types from "./types";

const initialState = {
  cards: {
    loading: true,
    allCards: []
  },
  componentWidth: null,
  mobileActiveTab: "cards"
};

const getUniqueCardMechanics = payload => {
  const mechanics = Object.values(payload)
    .reduce((a, b) => a.concat(b))
    .filter(c=> c.mechanics)
    .map(c => c.mechanics[0].name);
  return [...new Set(mechanics)];
};

const standardCards = (payload) => {
  const standardSets = JSON.parse(localStorage.hearthloungeGameInfo).standard;
  const standardCards = Object.entries(payload).filter(set => standardSets.includes(set[0])).map(set => set[1]);

  return standardCards.reduce((a, b) => a.concat(b));
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
          standardCards: standardCards(payload),
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

    case types.GET_CARDS_COMPONENT_WIDTH:
      return {
        ...state,
        componentWidth: payload
      };

    default:
      return state;
  }
}