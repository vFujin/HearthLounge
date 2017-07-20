import {ref, refParent} from '../../../../keys';
import {success, error} from '../../../../utils/messages';

/**
 * Creates deck comment.
 *
 * @param {string} patch - current patch version in Hearthstone
 * @param {string} author - username of the logged user
 * @param {string} text - comment text
 * @param {string} deckId - deck id
 * @param {string} uid - user id
 */
export function postComment(patch, author, text, deckId, uid){
  if(patch && author && text && deckId && uid){

    const newCommentKey = refParent(`decks/${deckId}/comments}`).push().key;
    console.log(newCommentKey)

    let newComment = {
      created: +new Date(),
      id: newCommentKey,
      votes: 0,
      upvotes: 0,
      downvotes: 0,
      authorId: uid,
      patch,
      author,
      text
    };


    let updates = {};
    updates[`/deck-comments/${deckId}/${newCommentKey}`] = newComment;
    // updates[`/deck-comment-ratings/${deckId}/${newCommentKey}`] = newCommentRatings;
    updates[`/user-deck-comments/${uid}/${deckId}/${newCommentKey}`] = newComment.id;

    return ref.update(updates).then(()=>success('Successfully added comment!'),
              err=>error("Couldn't add comment. Try again later.")
        );
  } else {
    return error("Something's not quite right. Try again later.")
  }
}