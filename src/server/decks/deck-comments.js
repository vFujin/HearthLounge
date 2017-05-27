import {ref, refParent} from '../../keys';
import {error, success} from '../../utils/messages';

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
  const userComment = ref.child(`user-deck-comment-ratings/${uid}/${deckId}/${commentId}`);
  const deckComment = ref.child(`deck-comments/${deckId}/${commentId}`);

  const upvote = (comment) =>{
    comment.upvotes++;
    comment[uid] = { type: "upvote" };
    userComment.set(commentId);
  };
  const downvote = (comment) => {
    comment.downvotes++;
    comment[uid] = { type: "downvote" };
    userComment.set(commentId);
  };
  const nulify = (comment) => {
    comment[uid] = null;
    userComment.remove();
  };
  const onCommentVote = (err, commited) =>{
    if(err){
      error("Something's not quite right! Try again later.")
    } else if (!commited) {
      error("You have already voted!")
    } else {
      success("Vote has been submitted")
    }
  };

  deckComment.transaction(function(comment){
    if(comment) {
      if(comment.upvotes && comment[uid]){
        comment.upvotes--;
        vote === "downvote" ? downvote(comment) : nulify(comment);

      } else if (comment.downvotes && comment[uid]) {
        comment.downvotes--;
        vote === "upvote" ? upvote(comment) : nulify(comment);

      } else {
        //ternary, y u no workin :(
        if(vote === "upvote"){
          upvote(comment);
        } else {
          downvote(comment);
        }
        userComment.set(commentId);
      }
    }
    return comment;
  }, (err, commited)=>onCommentVote(err, commited));


}
