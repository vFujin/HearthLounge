import {ref} from '../../../../keys';

//TODO: when comment is going to be deleted, need to decrement
export default function (deckId){
  ref.child(`decks/${deckId}`).transaction(function(deck) {
    if (deck) {
      deck.comments++;
      if (!deck.comments) {
        deck.comments = 1;
      }
    }
    return deck;
  });
}