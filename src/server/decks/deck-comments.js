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
      .on("value", snapshot => {
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
 * Posts deck comment.
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

export function getElementSnapshotOnce(selector, callback){
  return selector.once("value", snapshot=>callback(snapshot));
}
export function subscribeToElementSnapshot(selector, callback){
  return selector.on("value", snapshot=>callback(snapshot));
}

export function rateComment(deckId, commentId, uid, voteType, userVote, callback) {
  const deckComment = ref.child(`deck-comments/${deckId}/${commentId}`);
  const deckCommentRatings = ref.child(`deck-comment-ratings/${deckId}/${commentId}`);
  const userDeckCommentRatings = ref.child(`user-deck-comment-ratings/${uid}/${deckId}`);

  getElementSnapshotOnce(deckCommentRatings, (snapshot)=> {

    if (snapshot.val() === null) {

      deckCommentRatings.set({
        [uid]: voteType,
        id: commentId
      });
      callback(voteType);
    }

    else if (snapshot.val()[uid] === voteType) {
      if(snapshot.numChildren() < 3){
        deckCommentRatings.remove();
      }
      else {
        deckCommentRatings.update({
          [uid]: null
        });
      }
      callback("null");
    }

    else {
      deckCommentRatings.update({
        [uid]: voteType
      });
      callback(voteType);
        // deckComment.update({})

    }
  });

  deckComment.transaction(function(comment){
    if(comment) {
      console.log(voteType, userVote);
      if(voteType === userVote){
        comment[`${voteType}s`]--
      }
      else if(voteType === "upvote" && userVote === "downvote"){
        comment.upvotes++;
        comment.downvotes--;
      }
      else if(voteType === "downvote" && userVote === "upvote"){
        comment.downvotes++;
        comment.upvotes--;
      }
      else{
        comment[`${voteType}s`]++
      }
    }
    return comment;
  });

  getElementSnapshotOnce(userDeckCommentRatings, snapshot => {
    if (snapshot.val() === null) {
      userDeckCommentRatings.set({
        [commentId]: voteType
      });
    }

    else if (snapshot.val()[commentId] === voteType) {
      if (snapshot.numChildren() < 2) {
        userDeckCommentRatings.remove();
      }
      else {
        userDeckCommentRatings.update({
          [commentId]: null
        });
      }

    }
    else {
      userDeckCommentRatings.update({
        [commentId]: voteType
      });
    }
  });

  // deckComment.transaction(function(comment){
  //   if(comment) {
  //
  //
  //       if(voteType === "downvote"){
  //         comment.upvotes--;
  //         comment.downvotes++;
  //       }
  //     // else if (comment.downvotes)  {
  //     //   if(voteType === "upvote"){
  //     //     comment.upvotes++;
  //     //     comment.downvotes--;
  //     //   }
  //     //   else {
  //     //     comment.upvotes--;
  //     //     comment.downvotes--;
  //     //   }
  //     // }
  //     // else voteType === "upvote" ? comment.upvotes++ : comment.downvotes++;
  //   }
  //   return comment;
  // })

}