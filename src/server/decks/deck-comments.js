import {ref, refParent} from '../../keys';
import {error, success} from '../../utils/messages';

export function fetchComments(deckId, callback){
  console.log(deckId);
  refParent(`deck-comments/${deckId}`)
      .once("value", snapshot => {
        callback(snapshot.val());
      });
}

export function fetchUserVotedDeckComments(deckId, callback){
  refParent(`deck-comment-ratings/${deckId}`)
      .once("value", snapshot => {
        callback(snapshot.val());
      });
}

export function getUpdatedCommentVotes(deckId, commentId, callback){
  refParent(`deck-comment-ratings/${deckId}/${commentId}`)
      .on("value", snapshot =>{
        // console.log(snapshot.val());
        callback(snapshot.val());
      })
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

    let simplifiedNewComment = {
      upvotes: 0,
      downvotes: 0,
      id: newCommentKey,
    };

    let updates = {};
    updates[`/deck-comments/${deckId}/${newCommentKey}`] = newComment;
    // updates[`/deck-comment-ratings/${deckId}/${newCommentKey}`] = simplifiedNewComment;
    updates[`/user-deck-comments/${uid}/${deckId}/${newCommentKey}`] = newComment.id;

    return ref.update(updates);
  }
  else {
    return error("Something's not quite right. Try again later.")
  }
}



export function rateComment(deckId, commentId, uid, voteType) {
  const deckComment = ref.child(`deck-comments/${deckId}/${commentId}`);
  const deckCommentRatings = ref.child(`deck-comment-ratings/${deckId}/${commentId}`);
  const userDeckCommentRatings = ref.child(`user-deck-comment-ratings/${uid}/${deckId}`);

  const nulify = (comment) => {
    comment[uid] = null;
    userDeckCommentRatings.update({[commentId]: null})
  };

  const vote = (comment, key) => {
    comment[key]++;
    userDeckCommentRatings.update({[commentId]: voteType});
  };

  deckCommentRatings.transaction(function(comment){
    if(comment) {
        if (comment.upvotes && comment[uid]) {
          comment.upvotes--;
          voteType === "downvote" ? vote(comment, 'downvotes') : nulify(comment);
        } else if (comment.downvotes && comment[uid]) {
          comment.downvotes--;
          voteType === "upvote" ? vote(comment, 'upvotes') : nulify(comment);

        } else {
          comment[uid] = voteType;
          userDeckCommentRatings.update({[commentId]: voteType});
          if (voteType === "upvote") {
            comment.upvotes++;
          } else {
            comment.downvotes++;
          }
        }
    }
    return comment
  });

  deckComment.transaction(function(comment){
    if(comment) {
      if (comment.upvotes) {
        voteType === "downvote" ? comment.downvotes++ : comment.upvotes--;
      } else if (comment.downvotes) {
        voteType === "upvote" ? comment.upvotes++ : comment.downvotes--;
      } else {
        if (voteType === "upvote") {
          comment.upvotes++;
        } else {
          comment.downvotes++;
        }
      }
    }
    return comment;
  })

}