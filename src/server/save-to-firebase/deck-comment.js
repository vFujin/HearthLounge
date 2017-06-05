import {ref} from '../../keys';
import {error} from '../../utils/messages';

/**
 * Creates deck comment.
 *
 * @param {string} author - username of the logged user
 * @param {string} text - comment text
 * @param {string} deckId - deck id
 * @param {string} uid - user id
 */
export function postComment(author, text, deckId, uid){
  if(author && text && deckId && uid){

    const newCommentKey = ref.child(`decks/${deckId}/comments`).push().key;

    let newComment = {
      created: +new Date(),
      edited: null,
      patch: 'ungoro',
      author,
      text,
      uid,
      id: newCommentKey,
      votes: 0,
      upvotes: 0,
      downvotes: 0
    };



    let updates = {};
    updates[`/deck-comments/${deckId}/${newCommentKey}`] = newComment;
    // updates[`/deck-comment-ratings/${deckId}/${newCommentKey}`] = newCommentRatings;
    updates[`/user-deck-comments/${uid}/${deckId}/${newCommentKey}`] = newComment.id;

    return ref.update(updates);
  }
  else {
    return error("Something's not quite right. Try again later.")
  }
}