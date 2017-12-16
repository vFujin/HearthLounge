import * as types from "../types/firebase";

const initialState = {
  loading: true,
  authenticated: false,
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    /**
     * SIGN IN
     */
    case types.FIREBASE_SIGN_IN_REQUEST:
      return {
        loading: true
      };
    case types.FIREBASE_SIGN_IN_SUCCESS:
      return {
        loading: false,
        authenticated: true,
        ...payload
      };
    case types.FIREBASE_SIGN_IN_ERROR:
      return {
        loading: false,
        authenticated: false,
        error: payload
      };

    /**
     * SIGN OUT
     */
    case types.FIREBASE_SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FIREBASE_SIGN_OUT_SUCCESS:
      return {
        loading: false,
        authenticated: false
      };
    case types.FIREBASE_SIGN_OUT_ERROR:
      return {
        ...state,
        loading: false,
        authenticated: true,
        error: payload,
      };

    /**
     * RE-AUTHENTICATE
     */
    case types.FIREBASE_REAUTHENTICATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FIREBASE_REAUTHENTICATE_SUCCESS:
      return {
        ...state,
        loading: false,
        reauthenticated: true
      };
    case types.FIREBASE_REAUTHENTICATE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    /**
     * RESET PASSWORD
     */
    case types.FIREBASE_RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FIREBASE_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        resetPassword: true
      };
    case types.FIREBASE_RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    /**
     * DELETE ACCOUNT
     */
    case types.FIREBASE_DELETE_ACTIVE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FIREBASE_DELETE_ACTIVE_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        authenticated: false
      };
    case types.FIREBASE_DELETE_ACTIVE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        deleteError: payload
      };
    case 'UPDATE_ACTIVE_USER':
      return {
        loading: false,
        ...payload
      };
    default:
      return state;
  }
}