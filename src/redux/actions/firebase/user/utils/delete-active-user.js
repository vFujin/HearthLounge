import * as types from "../../../../types/firebase";

export function firebaseDeleteActiveUserRequest(){
  return {
    type: types.FIREBASE_DELETE_ACTIVE_USER_REQUEST
  }
}

export function firebaseDeleteActiveUserSuccess(){
  return {
    type: types.FIREBASE_DELETE_ACTIVE_USER_SUCCESS,
  }
}

export function firebaseDeleteActiveUserFailure(error){
  return {
    type: types.FIREBASE_DELETE_ACTIVE_USER_FAILURE,
    payload: error
  }
}