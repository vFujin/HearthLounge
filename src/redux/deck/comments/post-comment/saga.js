import {ref} from "../../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";
import {newComment, updateDeckCommentsCount} from "../utils";

export const postDeckComment = ({current, deckComment, deckId, uid}) => {
  const commentId = ref.child(`decks/${deckId}/comments`).push().key;
  const created = +new Date();
  const comment = newComment(current, deckComment, deckId, uid, commentId, created);
  return ref.update(comment).then(()=> ({commentId}), err => ({err})
  );
};

export function* postDeckCommentSaga({payload}) {
  const {deckId} = payload;
  const {commentId, err} = yield call(postDeckComment, payload);

  if(err){
    yield put(actions.postDeckCommentFailure(err));
  } else {
    yield put(actions.postDeckCommentSuccess(Object.assign(payload, {commentId})));
    yield updateDeckCommentsCount(deckId, "increment");
  }
}

export function* watchDeckCommentPostingStatus() {
  yield takeEvery(types.POST_DECK_COMMENT_REQUEST, postDeckCommentSaga)
}