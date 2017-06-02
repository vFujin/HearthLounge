import {ref} from '../../keys';

export function getDeckDetails(deckId, callback){
  ref.child(`decks/${deckId}`).once("value", snapshot => {
    callback(snapshot.val());
  });
}