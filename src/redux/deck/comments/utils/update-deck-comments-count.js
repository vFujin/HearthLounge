import {firestore} from "../../../../keys";

export const updateDeckCommentsCount = deckId => {
  const deckRef = firestore.collection('decks').doc(deckId);
  firestore.runTransaction(transaction => {

    return transaction.get(deckRef).then(doc => {
      const newNumberOfComments = doc.data().comments + 1;
      transaction.update(deckRef, {comments: newNumberOfComments});
    });
  })
    .then(() => console.log("Transaction successfully committed!"))
    .catch(error => console.log("Transaction failed: ", error));
};
