import {ref, refParent} from '../keys';
import {success, loading, error} from '../utils/messages';
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
  return ref.child(`decks/${deckId}`).transaction(function(deck) {
    if (deck) {
        deck.views++;
        if (!deck.views) {
          deck.views = {};
        }
    }
    return deck;
  });
}

export function postComment(author, text, deckId, uid){
  if(author && text && deckId && uid){


    let newComment = {
      created: +new Date(),
      edited: null,
      author,
      text,
      uid
    };

    const commentId = ref.child(`decks/${deckId}/comments`).push().key;

    let updates = {};
    updates[`/deck-comments/${deckId}/${commentId}`] = newComment;
    updates[`/user-deck-comments/${uid}/${commentId}`] = newComment;

    return ref.update(updates);
  }
}

export function fetchComments(deckId, callback){
  ref(`deck-comments/${deckId}`)
      .on("value", snapshot => {
        console.log(snapshot.val());
        callback(snapshot.val());
      });
}






