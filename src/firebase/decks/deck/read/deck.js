import {ref} from '../../../../keys';

export default function (deckId, resolve, reject){
  // console.log(resolve);
  ref.child(`decks/${deckId}`).once("value", snapshot => {
    resolve(snapshot.val());
  }, err => reject(err));
}