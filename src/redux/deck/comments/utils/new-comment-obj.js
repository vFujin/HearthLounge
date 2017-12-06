import {commentUpdates} from "./updates";

export const newComment = (patch, text, deckId, uid, commentId, created) =>{

  const commentObj = {
    patch,
    text,
    commentId,
    created,
    authorId: uid,
    votes: 0,
    upvotes: 0,
    downvotes: 0
  };

  return commentUpdates(uid, deckId, commentId, "create", commentObj);
};