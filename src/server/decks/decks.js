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
  const userDeckVote = ref.child(`user-deck-ratings/${uid}/${deckId}`);
  const deck = ref.child(`decks/${deckId}`);
  const deckRating = ref.child(`deck-ratings/${deckId}`);

  const upvote = (deck, hasUid) =>{
    deck.upvotes++;
    hasUid ? deck[uid] = { type: "upvote" } : null;
    hasUid ? userDeckVote.set({deckId, type: "upvote"}) : null;
  };
  const downvote = (deck, hasUid) => {
    deck.downvotes++;
    hasUid ? deck[uid] = { type: "downvote" } : null;
    hasUid ? userDeckVote.set({deckId, type: "downvote"}) : null;
  };
  const nulify = (deck, hasUid) => {
    hasUid ? deck[uid] = null : null;
    hasUid ? userDeckVote.remove() : null;
  };
  const onDeckVote = (err, commited) =>{
    if(err){
      error("You can't vote for your own deck.")
    } else if (!commited) {
      error("You have already voted!")
    } else {
      success("Vote has been submitted")
    }
  };

  deckRating.transaction(function(deck){
    if (deck) {
      if (deck.upvotes && deck[uid]) {
        deck.upvotes--;
        vote === "downvote" ? downvote(deck, true) : nulify(deck, true);

      } else if (deck.downvotes && deck[uid]) {
        deck.downvotes--;
        vote === "upvote" ? upvote(deck, true) : nulify(deck, true);

      } else {
        if (vote === "upvote") {
          upvote(deck, true);
        } else {
          downvote(deck, true);
        }
        userDeckVote.set({deckId, type: vote});
      }
    }
    return deck;
  });

  deck.transaction(function(deck) {
    if (deck) {
      if (deck.upvotes) {
        deck.upvotes--;
        vote === "downvote" ? downvote(deck, false) : nulify(deck, false);

      } else if (deck.downvotes) {
        deck.downvotes--;
        vote === "upvote" ? upvote(deck, false) : nulify(deck, false);

      } else {
        //ternary, y u no workin :(
        if (vote === "upvote") {
          upvote(deck, false);
        } else {
          downvote(deck, false);
        }
      }
    }
    return deck;
  }, (err, commited)=>onDeckVote(err, commited));
}


