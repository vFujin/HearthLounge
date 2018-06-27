import {firestore} from '../../../../keys';

export default function (deckId){
  const deckRef = firestore.collection('decks').doc(deckId);

  firestore.runTransaction(transaction => {
    return transaction.get(deckRef).then(deck => {
      const views = deck.data().views + 1;
      transaction.update(deckRef, {views})
    })
  }).then(()=> null).catch(err=>null);

}
