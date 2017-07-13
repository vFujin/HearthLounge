import {ref} from '../../../../keys';
import {default as voteTransaction} from '../../../utils/vote';
import {updateVotes} from '../../../user/update';

export default function (deckId, commentId, uid, vote, callback) {
  const deckComment = ref.child(`deck-comments/${deckId}/${commentId}`);
  const userDeckCommentRating = ref.child(`user-deck-comment-ratings/${uid}/${deckId}`);

  voteTransaction(deckComment, uid, vote);
  updateVotes(userDeckCommentRating, commentId, vote, callback);
}