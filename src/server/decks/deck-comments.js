import {ref} from '../../keys';
import {default as voteTransaction} from '../../firebase/utils/vote';
import {updateVotes} from '../../firebase/user/update';


export function fetchComments(deckId, uid, callback){
  ref.child(`deck-comments/${deckId}`)
     .once("value",snapshot => {
        let arr = [];
        snapshot.forEach(childSnapshot => {
          let comment = childSnapshot.val();
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

export function rateComment(deckId, commentId, uid, vote, callback) {
  const deckComment = ref.child(`deck-comments/${deckId}/${commentId}`);
  const userDeckCommentRating = ref.child(`user-deck-comment-ratings/${uid}/${deckId}`);

  voteTransaction(deckComment, uid, vote);
  updateVotes(userDeckCommentRating, commentId, vote, callback);
}