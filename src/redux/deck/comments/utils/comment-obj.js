import {ref} from "../../../../keys";

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