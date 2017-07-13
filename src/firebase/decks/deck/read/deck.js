import {ref} from '../../../../keys';

export default function (deckId, callback){
  ref.child(`decks/${deckId}`).once("value", snapshot => {
    callback(snapshot.val());
  });
}