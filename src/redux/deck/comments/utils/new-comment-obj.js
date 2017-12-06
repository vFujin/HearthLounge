import {ref} from "../../../../keys";
import {commentUpdates} from "./updates";

export const newComment = (patch, text, deckId, uid) =>{
  const commentId = ref.child(`decks/${deckId}/comments`).push().key;

  const commentObj = {
    patch,
    text,
    commentId,
    authorId: uid,
    created: +new Date(),
    votes: 0,
    upvotes: 0,
    downvotes: 0
  };

  return commentUpdates(uid, deckId, commentId, "create", commentObj);
};