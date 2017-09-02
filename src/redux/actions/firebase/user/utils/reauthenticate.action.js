import * as types from "../../../../types/firebase";

export function firebaseReauthenticateRequest(){
  return {
    type: types.FIREBASE_REAUTHENTICATE_REQUEST
  }
}

export function firebaseReauthenticateSuccess(status){
  return {
    type: types.FIREBASE_REAUTHENTICATE_SUCCESS,
    payload: status
  }
}

export function firebaseReauthenticateError(error){
  return {
    type: types.FIREBASE_REAUTHENTICATE_ERROR,
    payload: error
  }
}