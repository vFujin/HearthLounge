import {ref, refParent} from '../../keys';
import {voteTransaction} from '../utils/vote-transaction';
import {updateUserVotes} from '../utils/update-user-votes';
// import {success, loading, error} from '../../utils/messages';

let data = [];
let now = new Date();
let week = now.setDate(now.getDate() - 7);
let _start = now.setDate(now.getDate() - 1);
let _end = +new Date();
let _n = 15;
export function lazyLoadDecks(callback, playerClass) {
  let decksRef = ref.child('decks');
  console.log("before", data)
  decksRef.orderByChild('created')
      .startAt(_start)
      .endAt(_end)
      .limitToLast(_n)
      .once("value", snapshot=> {
        // console.log(_start, _end)
        data.push(snapshot.val());

        callback(snapshot.val());
        console.log("after", data)
      });
  _start = _start - 2629743*3;
  _end = now.setDate(now.getDate() - 30);

}



export function incrementViewsCount(deckId){
  ref.child(`decks/${deckId}`).transaction(function(deck) {
    if (deck) {
        deck.views++;
        if (!deck.views) {
          deck.views = 0;
        }
    }
    return deck;
  });
}

export function rateDeck(deckId, uid, vote, callback){
  const deckRating = ref.child(`decks/${deckId}`);
  const userDeckRating = ref.child(`user-deck-ratings/${uid}/${deckId}`);

  voteTransaction(deckRating, uid, vote);
  updateUserVotes(userDeckRating, deckId, vote, callback);
}



