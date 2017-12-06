import {ref} from "../../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";
import {} from "../utils";
import {commentUpdates, updateDeckCommentsCount} from "../utils/updates";

export const deleteDeckComment = ({commentId, deckId, uid}) => {
  const comment = commentUpdates(uid, deckId, commentId, "delete");
  return ref.update(comment).then(()=> ({response: 200}), err => ({err})
  );
};

export function* deleteDeckCommentSaga({payload}) {
  const {response, err} = yield call(deleteDeckComment, payload);
  const {deckId} = payload;

  if(err){
    yield put(actions.deleteDeckCommentFailure(err));
  } else {
    yield put(actions.deleteDeckCommentSuccess(response));
    yield updateDeckCommentsCount(deckId, "decrement");
  }
}

export function* watchDeckCommentDeletingStatus() {
  yield takeEvery(types.DELETE_DECK_COMMENT_REQUEST, deleteDeckCommentSaga)
}