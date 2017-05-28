import {ref, refParent} from '../../keys';
import {error, success} from '../../utils/messages';

export function fetchComments(deckId, callback){
  refParent(`deck-comments/${deckId}`)
      .once("value", snapshot => {
        callback(snapshot.val());
      });
}

export function fetchUserVotedDeckComments(uid, deckId, callback){
  refParent(`deck-comment-ratings/${deckId}`)
      .once("value", snapshot => {
        console.log(snapshot.val())
        callback(snapshot.val());
      });
}

export function getUpdatedComment(deckId, commentId, callback){
  refParent(`deck-comments/${deckId}/${commentId}`)
      .on("value", snapshot => {
        console.log(snapshot.val());
        callback(snapshot.val())
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
    updates[`/deck-comment-ratings/${deckId}/${newCommentKey}`] = simplifiedNewComment;
    updates[`/user-deck-comments/${uid}/${deckId}/${newCommentKey}`] = newComment.id;

    return ref.update(updates);
  }
  else {
    return error("Something's not quite right. Try again later.")
  }
}



export function rateComment(deckId, commentId, uid, vote){
  const userCommentVote = ref.child(`user-deck-comment-ratings/${uid}/${deckId}/${commentId}`);
  const deckComment = ref.child(`deck-comments/${deckId}/${commentId}`);
  const deckCommentRating = ref.child(`deck-comment-ratings/${deckId}/${commentId}`);

  const upvote = (comment, hasUid) =>{
    comment.upvotes++;
    hasUid ? comment[uid] = { type: "upvote" } : null;
    hasUid ? userCommentVote.set({commentId, type: "upvote"}) : null;
  };
  const downvote = (comment, hasUid) => {
    comment.downvotes++;
    hasUid ? comment[uid] = { type: "downvote" } : null;
    hasUid ? userCommentVote.set({commentId, type: "downvote"}) : null;
  };
  const nulify = (comment, hasUid) => {
    hasUid ? comment[uid] = null : null;
    hasUid ? userCommentVote.remove() : null;
  };
  const onCommentVote = (err, commited) =>{
    if(err){
      error("You can't vote for your own comments.")
    } else if (!commited) {
      error("You have already voted!")
    } else {
      success("Vote has been submitted")
    }
  };

  deckCommentRating.transaction(function(comment){
    if (comment) {
      if (comment.upvotes && comment[uid]) {
        comment.upvotes--;
        vote === "downvote" ? downvote(comment, true) : nulify(comment, true);

      } else if (comment.downvotes && comment[uid]) {
        comment.downvotes--;
        vote === "upvote" ? upvote(comment, true) : nulify(comment, true);

      } else {
        if (vote === "upvote") {
          upvote(comment, true);
        } else {
          downvote(comment, true);
        }
        userCommentVote.set({commentId, type: vote});
      }
    }
    return comment;
  });

  deckComment.transaction(function(comment) {
    if (comment) {
      if (comment.upvotes) {
        comment.upvotes--;
        vote === "downvote" ? downvote(comment, false) : nulify(comment, false);

      } else if (comment.downvotes) {
        comment.downvotes--;
        vote === "upvote" ? upvote(comment, false) : nulify(comment, false);

      } else {
        //ternary, y u no workin :(
        if (vote === "upvote") {
          upvote(comment, false);
        } else {
          downvote(comment, false);
        }
      }
    }
      return comment;
  }, (err, commited)=>onCommentVote(err, commited));
}
