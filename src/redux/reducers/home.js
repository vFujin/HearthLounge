import * as types from "../types/decks";

const initialState = {
  decks: {
    loading: true
  },
  deckFilters: {},
  redditPosts: [],
  twitchBroadcasters: []
};


export default function(state=initialState, {type, payload}){
  switch(type){
    case types.FETCH_HOT_DECKS_REQUEST:
      return {
        ...state,
        decks: {
          loading: true
        }
      };
    case types.FETCH_HOT_DECKS_SUCCESS:
      return {
        ...state,
        decks: {
          loading: false,
            all: payload
        }
      };
    case types.FETCH_HOT_DECKS_FAILURE:
      return {
        ...state,
        decks: {
          loading: false,
          error: payload
        }
      };
    case 'UPDATE_DECK_FILTERS': return {
        ...state,
        deckFilters: {
            ...state.deckFilters,
            ...payload
        }
    };
    default: return state;
  }
}