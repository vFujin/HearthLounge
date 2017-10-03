import {refParent} from '../../../../keys';

export default function (deckId, resolve, reject, uid = null) {
  return refParent('deck-comments').once("value", snapshot => {
    if (snapshot.child(deckId).val()) {
      let arr = [];

      snapshot.child(deckId).forEach(childSnapshot => {
        let comment = childSnapshot.val();
        arr.push({
          upvotes: comment.upvotes,
          downvotes: comment.downvotes,
          votes: comment.votes,
          commentId: comment.commentId,
          authorId: comment.authorId,
          created: comment.created,
          patch: comment.patch,
          text: comment.text,
          voteType: uid ? comment[uid] : null
        });
      });
      resolve(arr)
    } else {
      resolve([])
    }
  }, err => reject(err));
}