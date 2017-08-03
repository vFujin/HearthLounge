import {ref} from '../../../../keys';
import {default as voteTransaction} from '../../../utils/vote';
import {updateVotes} from '../../../user/update';

export default function(deckId, uid, vote, callback){
  const deckRating = ref.child(`decks/${deckId}`);
  const userDeckRating = `user-deck-ratings/${uid}`;

  voteTransaction(deckRating, uid, vote);
  updateVotes(userDeckRating, uid, deckId, vote, callback);
}
