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



export function rateComment(deckId, commentId, uid, vote) {
  const userCommentVote = ref.child(`user-deck-comment-ratings/${uid}/${deckId}/${commentId}`);
  const deckComment = ref.child(`deck-comments/${deckId}/${commentId}`);
  const deckCommentRatings = ref.child(`deck-comment-ratings/${deckId}/${commentId}`);


  const upvoteUID = (comment) => {
    comment.upvotes++;
    comment[uid] = {type: "upvote"}
    userCommentVote.set({commentId, type: "upvote"});
  };

  const upvote = (comment) => {
    comment.upvotes++;
    deckCommentRatings.set({
      [uid]: {type: vote},
      upvotes: 1,
      downvotes: 0,
      id: commentId})
  };

  const downvoteUID = (comment) => {
    comment.downvotes++;
    comment[uid] = {type: "downvote"}
    userCommentVote.set({commentId, type: "downvote"});
  };

  const downvote = (comment) => {
    comment.downvotes;
    deckCommentRatings.set({
      [uid]: {type: vote},
      upvotes: 0,
      downvotes: 1,
      id: commentId})
  };

  const nulifyUID = (comment) => {
    comment[uid] = null;
    userCommentVote.remove();
  };

  const nulify = () => {
    deckCommentRatings.remove()
  };
  const onCommentVote = (err, commited) => {
    if (err) {
      error("You can't vote for your own comments.")
    } else if (!commited) {
      error("You have already voted!")
    } else {
      success("Vote has been submitted")
    }
  };

  deckCommentRatings.transaction(function (comment) {
    if (comment) {
      if (comment.upvotes && comment[uid]) {
        comment.upvotes--;
        vote === "downvote" ? downvoteUID(comment) : nulifyUID(comment);

      } else if (comment.downvotes && comment[uid]) {
        comment.downvotes--;
        vote === "upvote" ? upvoteUID(comment) : nulifyUID(comment);

      } else {
        if (vote === "upvote") {
          upvoteUID(comment);
        } else {
          downvoteUID(comment);
        }
        // deckCommentRatings.set({commentId, type: vote});
        userCommentVote.set({commentId, type: vote});
      }
    }

    return comment;
  });

  deckComment.transaction(function (comment) {
    if (comment) {
      if (comment.upvotes) {
        comment.upvotes--;
        vote === "downvote" ? downvote(comment) : nulify();

      } else if (comment.downvotes) {
        comment.downvotes--;
        vote === "upvote" ? upvote(comment) : nulify();


      } else {
        //ternary, y u no workin :(
        if (vote === "upvote") {
          upvote(comment);
        } else {
          downvote(comment);
        }
        // deckCommentRatings.update({
        //   [uid]: {type: vote},
        //   upvotes: vote === "upvote" ? 1 : 0,
        //   downvotes: vote === "downvote" ? 1 : 0,
        //   id: commentId,
        // })
      }
    }
    return comment;
  }, (err, commited) => onCommentVote(err, commited));

}