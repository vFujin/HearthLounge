import {ref, refParent} from '../../keys';
import {error} from '../../utils/messages';

export function fetchComments(deckId, callback){
  refParent(`deck-comments/${deckId}`)
      .once("value", snapshot => {
        callback(snapshot.val());
      });
}

export function fetchUserVotedDeckComments(uid, deckId, callback){
  refParent(`user-deck-comment-ratings/${uid}/${deckId}`)
      .once("value", snapshot => {
        callback(snapshot.val());
      });
}


/**
 * Function representing comment posting to the deck
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
      upvotes: 0,
      downvotes: 0,
      author,
      text,
      uid,
      id: newCommentKey
    };



    let updates = {};
    updates[`/deck-comments/${deckId}/${newCommentKey}`] = newComment;
    updates[`/user-deck-comments/${uid}/${deckId}/${newCommentKey}`] = newComment.id;

    return ref.update(updates);
  }
  else {
    return error("Something's not quite right. Try again later.")
  }
}

export function rateComment(deckId, commentId, uid, vote){
  ref.child(`deck-comments/${deckId}/${commentId}`).transaction(function(comment){
    if(comment) {
      if (comment.upvotes && comment[uid]) {
        comment.upvotes--;
        if(vote==="downvote"){
          comment.downvotes++;
          comment[uid] = {
            type: "downvote"
          }
        } else {
          comment[uid] = null
        }
      }
      else if (comment.downvotes && comment[uid]) {
        comment.downvotes--;
        if(vote==="upvote"){
          comment.upvotes++;
          comment[uid] = {
            type: "upvote"
          }
        } else {
          comment[uid] = null
        }
      }
      else {
        if(vote==="upvote"){
          comment.upvotes++;
          comment[uid] = {
            type: "upvote"
          }
        }
        else{
          comment.downvotes++;
          comment[uid] = {
            type: "downvote"
          }
        }

      }
    }
    return comment;
  });


}
