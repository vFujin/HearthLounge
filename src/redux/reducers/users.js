import * as types from "../types/firebase";

const initialState = {
  activeUser: {},
  users: []
};

export default function(state=initialState, {type, payload}){
  switch(type){
    case types.FIREBASE_SIGN_IN_REQUEST: return {
      activeUser: {
        loading: true
      }
    };
    case types.FIREBASE_SIGN_IN_SUCCESS: return {
        ...state,
      activeUser:{
        loading: false,
        ...payload
      }
    };
    case types.FIREBASE_SIGN_IN_ERROR: return {
      ...state,
      activeUser: {
        loading: false,
        error: payload
      }
    };
    case 'UPDATE_ACTIVE_USER': return {
      ...state,
      authenticated: payload,
      activeUser: payload
    };
    // case 'UPDATE_USER_LIST': return {
    //   ...state,
    //   users: action.users
    // };
    default: return state;
  }
}