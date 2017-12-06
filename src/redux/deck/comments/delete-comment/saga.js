import {ref} from "../../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";
import {commentUpdates, updateDeckCommentsCount} from "../utils";
import {error} from "../../../../utils/messages";

export const deleteDeckComment = ({commentId, deckId, uid}) => {
  const comment = commentUpdates(uid, deckId, commentId, "delete");
  return ref.update(comment).then(()=> ({response: 200}), err => ({err})
  );
};

export function* deleteDeckCommentSaga({payload}) {
  const {err} = yield call(deleteDeckComment, payload);
  const {deckId, commentId} = payload;

  if(err){
    yield put(actions.deleteDeckCommentFailure(err));
    yield error("Something's not quite right.", 6)
  } else {
    yield put(actions.deleteDeckCommentSuccess(commentId));
    yield updateDeckCommentsCount(deckId, "decrement");
  }
}

export function* watchDeckCommentDeletingStatus() {
  yield takeEvery(types.DELETE_DECK_COMMENT_REQUEST, deleteDeckCommentSaga)
}