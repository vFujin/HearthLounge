import {ref} from '../../../../keys';

export default function (deckId, commentId, callback, uid) {
  ref.child(`deck-comments/${deckId}/${commentId}`)
      .on("value", snapshot => {
        if (snapshot.val() !== null && uid) {
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
