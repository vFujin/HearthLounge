import * as types from "../types";

export function firebaseSignOutRequest(){
  return {
    type: types.FIREBASE_SIGN_OUT_REQUEST
  }
}

export function firebaseSignOutSuccess(authenticated){
  return {
    type: types.FIREBASE_SIGN_OUT_SUCCESS,
    payload: authenticated
  }
}

export function firebaseSignOutError(error){
  return {
    type: types.FIREBASE_SIGN_OUT_ERROR,
    payload: error
  }
}