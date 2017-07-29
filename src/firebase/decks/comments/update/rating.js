import {ref, refParent} from '../../../../keys';
import {default as voteTransaction} from '../../../utils/vote';
// import {updateVotes} from '../../../user/update';

export default function (deckId, commentId, uid, vote, callback) {
  const deckComment = ref.child(`deck-comments/${deckId}/${commentId}`);

  voteTransaction(deckComment, uid, vote);
}