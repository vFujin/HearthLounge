import * as types from "../types/firebase";

const initialState = {
  activeUser: {
    loading: true,
    authenticated: false
  },
  users: []
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FIREBASE_SIGN_IN_REQUEST:
      return {
        ...state,
        activeUser: {
          loading: true
        }
      };
    case types.FIREBASE_SIGN_IN_SUCCESS:
      return {
        ...state,
        activeUser: {
          loading: false,
          authenticated: true,
          ...payload
        }
      };
    case types.FIREBASE_SIGN_IN_ERROR:
      return {
        ...state,
        activeUser: {
          loading: false,
          authenticated: false,
          error: payload
        }
      };

    case types.FIREBASE_SIGN_OUT_REQUEST:
      return {
        ...state,
        activeUser: {
          loading: true,
        }
      };
    case types.FIREBASE_SIGN_OUT_SUCCESS:
      return {
        ...state,
        activeUser: {
          loading: false,
          authenticated: false
        }
      };
    case types.FIREBASE_SIGN_OUT_ERROR:
      return {
        ...state,
        activeUser: {
          loading: false,
          authenticated: true,
          error: payload
        }
      };
    case 'UPDATE_ACTIVE_USER':
      return {
        ...state,
        activeUser: {
          loading: false,
          ...payload
        },
      };
      // case 'UPDATE_USER_LIST': return {
      //   ...state,
      //   users: action.users
      // };
    default:
      return state;
  }
}