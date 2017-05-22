import {ref, refParent} from '../../keys';
/**
 * Function representing comment posting to the deck
 * @param {string} author - username of the logged user
 * @param {string} text - comment text
 * @param {string} deckId - deck id
 * @param {string} uid - user id
 */
export function postComment(author, text, deckId, uid){
  if(author && text && deckId && uid){

    let newComment = {
      created: +new Date(),
      edited: null,
      patch: 'ungoro',
      upvotes: 0,
      downvotes: 0,
      author,
      text,
      uid
    };

    const newCommentKey = ref.child(`decks/${deckId}/comments`).push().key;

    let updates = {};
    updates[`/deck-comments/${deckId}/${newCommentKey}`] = newComment;
    updates[`/user-deck-comments/${uid}/${newCommentKey}`] = newComment;

    return ref.update(updates);
  }
}

export function fetchComments(deckId, callback){
  refParent(`deck-comments/${deckId}`)
      .once("value", snapshot => {
        callback(snapshot.val());
      });
}
