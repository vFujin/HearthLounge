import {ref, firestore} from "../../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";


export const comment = (patch, text, deckId, uid) =>{
    const newCommentKey = ref.child(`decks/${deckId}/comments`).push().key;

    let newComment = {
      patch,
      text,
      authorId: uid,
      created: +new Date(),
      commentId: newCommentKey,
      votes: 0,
      upvotes: 0,
      downvotes: 0
    };

    let updates = {};
    updates[`/deck-comments/${deckId}/${newCommentKey}`] = newComment;
    updates[`/user-deck-comments/${uid}/${deckId}/${newCommentKey}`] = newCommentKey;

  return updates;
};

export const updateDeckCommentsCount = deckId => {
  const deckRef = firestore.collection('decks').doc(deckId);
  firestore.runTransaction(transaction => {

    return transaction.get(deckRef).then(doc => {
      const newNumberOfComments = doc.data().comments + 1;
      transaction.update(deckRef, {comments: newNumberOfComments});
    });
  })
      .then(() => console.log("Transaction successfully committed!"))
      .catch(error => console.log("Transaction failed: ", error));
};

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