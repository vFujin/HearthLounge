import {ref, refParent} from '../../keys';
import {voteTransaction} from '../utils/vote-transaction';
import {updateUserVotes} from '../utils/update-user-votes';
import {success, loading, error} from '../../utils/messages';

let data = [];
let _start = Date.now() - 86400*3000; //3 days
let _end = Date.now() - 604800*3000;
let _n = 604800*1000;

export function lazyLoadDecks(callback, playerClass){
  // if(playerClass !== null) {
  //
  //   refParent('decks')
  //       .orderByChild('hsClass')
  //       .equalTo(playerClass)
  //       .once("value", snapshot => {
  //         console.log(snapshot.val());
  //         callback(snapshot.val());
  //       });
  // }
  // else {
    refParent('decks')
        .orderByChild('hsClass')
        .once("value", snapshot => {
          console.log(snapshot.val())
          callback(snapshot.val());
        });
  //
  //   let now = Date.now();
  //   refParent('decks').orderByChild('created')
  //       .startAt(_start)
  //       .limitToFirst(_n)
  //       .on("child_added", (snapshot) => {
  //         console.log(snapshot.val());
  //         data.push(snapshot.val());
  //         callback(data);
  //       });
  //   console.log(data)
  //   _start += _n;
  //   _end += _n;
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



