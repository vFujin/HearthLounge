import {ref} from '../../../../keys';

export default function (deckId, uid, callback) {
  ref.child(`deck-comments/${deckId}`)
      .once("value", snapshot => {
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