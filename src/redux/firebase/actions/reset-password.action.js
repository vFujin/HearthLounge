import * as types from "../types";

export function firebaseResetPasswordRequest(){
  return {
    type: types.FIREBASE_RESET_PASSWORD_REQUEST
  }
}

export function firebaseResetPasswordSuccess(status){
  return {
    type: types.FIREBASE_RESET_PASSWORD_SUCCESS,
    payload: status
  }
}

export function firebaseResetPasswordError(error){
  return {
    type: types.FIREBASE_RESET_PASSWORD_ERROR,
    payload: error
  }
}