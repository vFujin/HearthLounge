import {ref, refParent} from '../../keys';
import {success, loading, error} from '../../utils/messages';
// let _start = 0;
// let _end = 14;
// let _n = 15;

export function lazyLoadDecks(callback, playerClass){
  if(playerClass !== null) {

    refParent('decks')
        .orderByChild('hsClass')
        .equalTo(playerClass)
        .on("value", snapshot => {
          console.log(snapshot.val());
          callback(snapshot.val());
        });
  }
  else{
    refParent('decks')
        .orderByChild('hsClass')
        .on("value", snapshot=> {
          callback(snapshot.val());
        });
  }
  // refChild('decks').orderByChild('title')
  //     .startAt(_start)
  //     .endAt(_end)
  //     .limitToLast(_n)
  //     .on("child_added", (snapshot)=>  {
  //       console.log(snapshot);
  //       return callback(snapshot.val());
  //     });
  // _start += _n;
  // _end += _n;
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

export function rateDeck(deckId, uid, vote){
  ref.child(`decks/${deckId}`).transaction(function(deck){
    if(deck) {
      switch (vote) {
        case "upvote":  {deck.upvotes++;break;}
        case "downvote": {deck.downvotes++; break;}
      }
      // if(!deck.upvotes || !deck.downvotes){
      //   deck.upvotes = {};
      //   deck.downvotes = {};
      // }
    }
    return deck;
  })
}


