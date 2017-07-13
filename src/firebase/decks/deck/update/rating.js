import {ref} from '../../../../keys';
import {default as voteTransaction} from '../../../utils/vote';
import {updateVotes} from '../../../user/update';

export default function(deckId, uid, vote, callback){
  const deckRating = ref.child(`decks/${deckId}`);
  const userDeckRating = ref.child(`user-deck-ratings/${uid}/${deckId}`);

  voteTransaction(deckRating, uid, vote);
  updateVotes(userDeckRating, deckId, vote, callback);
}
