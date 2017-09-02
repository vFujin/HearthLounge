import * as types from "../../../../types/firebase";

export function firebaseSignInRequest(){
  return {
    type: types.FIREBASE_SIGN_IN_REQUEST
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