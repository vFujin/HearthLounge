import {default as voteTransaction} from '../../../utils/vote';
import {updateVotes} from '../../../user/update';

export default function(deckId, uid, vote, callback){
  const userDeckRating = `user-deck-ratings/${uid}`;

  voteTransaction('decks', deckId, uid, vote);
  updateVotes(userDeckRating, uid, deckId, vote, callback);
}
