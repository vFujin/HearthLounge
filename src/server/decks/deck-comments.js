import {ref, refParent} from '../../keys';
import {error, success} from '../../utils/messages';

export function fetchComments(deckId, uid, callback){
  ref.child(`deck-comments/${deckId}`)
     .once("value",snapshot => {
        let arr = [];
        snapshot.forEach(childSnapshot => {
          let comment = childSnapshot.val();
          console.log(uid)

            arr.push({
              upvotes: comment.upvotes,
              downvotes: comment.downvotes,
              votes: comment.votes,
              id: comment.id,
              author: comment.author,
              created: comment.created,
              patch: comment.patch,
              text: comment.text,
              voteType: comment[uid]
            });

        });
        callback(arr)
      });
}

export function fetchComment(deckId, commentId, callback, uid){
  ref.child(`deck-comments/${deckId}/${commentId}`)
      .on("value", snapshot => {
        if(snapshot.val() !== null && uid) {
          callback({
            upvotes: snapshot.val().upvotes,
            downvotes: snapshot.val().downvotes,
            votes: snapshot.val().votes,
            id: snapshot.val().id,
            voteType: snapshot.val()[uid]
          });
        }
      })

}

export function getElementSnapshotOnce(selector, callback){
  return selector.once("value", snapshot=>callback(snapshot));
}

export function subscribeToElementSnapshot(selector, callback){
  return selector.on("value", snapshot=>callback(snapshot));
}

export function rateComment(deckId, commentId, uid, voteType, callback) {
  const deckComments = ref.child(`deck-comments/${deckId}/${commentId}`);
  const userDeckCommentRatings = ref.child(`user-deck-comment-ratings/${uid}/${deckId}`);

  deckComments.transaction(function(comment){
    const upvote = "upvote";
    const downvote = "downvote";

    if(comment){
      if(comment[uid]){

        if(comment[uid] === upvote && voteType === upvote){
          comment.votes--;
          comment.upvotes--;
          comment[uid] = null
        }

        else if (comment[uid] === downvote && voteType === downvote) {
          comment.votes++;
          comment.downvotes--;
          comment[uid] = null
        }

        else if (comment[uid] === upvote && voteType === downvote){
          comment.votes -= 2;
          comment.upvotes--;
          comment.downvotes++;
          comment[uid] = downvote;
        }

        else {
          comment.votes += 2;
          comment.upvotes++;
          comment.downvotes--;
          comment[uid] = upvote;
        }
      }

      else {
        comment[uid] = voteType;
        comment[uid] === upvote ? comment.votes++ : comment.votes--;
        comment[uid] === upvote ? comment.upvotes++ : comment.downvotes++;
      }
    }
    return comment;
  });

  getElementSnapshotOnce(userDeckCommentRatings, snapshot => {
    if (snapshot.val() === null) {
      userDeckCommentRatings.set({
        [commentId]: voteType
      });
      callback(voteType);
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
      callback("null");
    }
    else {
      userDeckCommentRatings.update({
        [commentId]: voteType
      });
      callback(voteType);
    }
  });
}