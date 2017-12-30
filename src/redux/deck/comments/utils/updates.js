import {firestore} from "../../../../keys";

export const commentUpdates = (uid, deckId, commentId, action, commentObj = null) => {
  let updates = {};
  switch(action){
    case "create": {
      updates[`/deck-comments/${deckId}/${commentId}`] = commentObj;
      updates[`/user-deck-comments/${uid}/${deckId}/${commentId}`] = commentId;
      return updates;
    }
    case "delete": {
      updates[`/deck-comments/${deckId}/${commentId}`] = null;
      updates[`/user-deck-comments/${uid}/${deckId}/${commentId}`] = null;
      return updates;
    }
    default: return null;
  }
};

export const updateDeckCommentsCount = (deckId, operator) => {
  const deckRef = firestore.collection('decks').doc(deckId);
  firestore.runTransaction(transaction => {
    return transaction.get(deckRef).then(doc => {
      const newNumberOfComments = operator === "increment" ? doc.data().comments + 1 : doc.data().comments - 1;
      transaction.update(deckRef, {comments: newNumberOfComments});
    });
  })
    .then(() => console.log("Transaction successfully committed!"))
    .catch(error => console.log("Transaction failed: ", error));
};