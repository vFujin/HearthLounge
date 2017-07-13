import {ref} from '../../../../keys';

export default function (deckId){
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