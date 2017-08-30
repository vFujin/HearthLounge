import {all} from 'redux-saga/effects';
import {watchPatch} from "./current-hs-patch.saga";

export default function* rootSaga(){
  yield all([
    watchPatch()
  ])
}