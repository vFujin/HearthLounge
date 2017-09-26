

import * as types from "../../types/decks";

const initialState = {
  decks: {
    loading: true
  },
  users: [],
  adventuresToggled: false
};


export default function(state=initialState, {type, payload}){
  switch(type){
    case types.FETCH_DECKS_REQUEST:
      return {
        ...state,
        decks: {
          loading: true
        }
      };
    case types.FETCH_DECKS_SUCCESS:
      return {
        ...state,
        decks: {
          loading: false,
          all: payload
        }
      };
    case types.FETCH_DECKS_FAILURE:
      return {
        ...state,
        decks: {
          loading: false,
          error: payload
        }
      };

    case types.UPDATE_DECKS_SUCCESS:
      return {
        ...state,
        decks: {
          loading: false,
          all: {
            ...state.decks.all,
            ...payload
          }
        }
      };

    case types.UPDATE_DECKS_FAILURE:
      return {
        ...state,
        decks: {
          loading: false,
          all: state.decks.all,
          updateErr: payload
        }
      };
    case 'UPDATE_DECK_LIST': return {
        ...state,
        decks: payload
    };
    case 'UPDATE_USER_LIST': return {
        ...state,
      users: payload
    };
    case 'UPDATE_ACTIVE_DECK': return {
      ...state,
      currentDeck: payload
    };
    case 'TOGGLE_ADVENTURE_FILTERS': return {
      ...state,
      adventuresToggled: payload
    };
    case 'UPDATE_MODE_FILTER': return {
      ...state,
      activeMode: payload
    };
    case 'UPDATE_ADVENTURE_FILTER': return {
      ...state,
      activeAdventure: payload
    };
    case 'UPDATE_CLASS_FILTER': return {
      ...state,
      activeClass: payload
    };
    default: return state;
  }
}