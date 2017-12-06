import {ref} from "../../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";
import {comment, updateDeckCommentsCount} from "../utils";

export const postDeckComment = ({current, deckComment, deckId, uid}) => {
  const c = comment(current, deckComment, deckId, uid);
  return ref.update(c).then(()=> ({response: 200}), err => ({err})
  );
};

export function* postDeckCommentSaga({payload}) {
  const {response, err} = yield call(postDeckComment, payload);
  const {deckId} = payload;

  if(err){
    yield put(actions.postDeckCommentFailure(err));
  } else {
    yield put(actions.postDeckCommentSuccess(response));
    yield updateDeckCommentsCount(deckId);
  }
}

export function* watchDeckCommentPostingStatus() {
  yield takeEvery(types.POST_DECK_COMMENT_REQUEST, postDeckCommentSaga)
}