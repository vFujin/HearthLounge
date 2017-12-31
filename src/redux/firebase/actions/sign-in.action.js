import * as types from "../types";

export function firebaseSignInRequest(payload){
  return {
    type: types.FIREBASE_SIGN_IN_REQUEST,
    payload
  }
}

export function firebaseSignInSuccess(user){
  return {
    type: types.FIREBASE_SIGN_IN_SUCCESS,
    payload: user
  }
}

export function firebaseSignInError(error){
  return {
    type: types.FIREBASE_SIGN_IN_ERROR,
    payload: error
  }
}