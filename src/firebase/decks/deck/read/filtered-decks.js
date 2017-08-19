import {ref} from '../../../../keys';
// import {success, loading, error} from '../../utils/messages';

export default function (callback, filter, value) {
  let decksRef = ref.child('decks');
  let lastKnownDeck = null;
  let pageQuery = decksRef.orderByChild(filter).equalTo(value).limitToFirst(15);

  pageQuery.once('value', snapshot=>{
    snapshot.forEach(childSnapshot=>{
      // if(childSnapshot.child('created').val() < week){
      //   return null;
      // }
      lastKnownDeck = childSnapshot.child('created').val();
    });
  });

  let nextQuery = decksRef.orderByChild(filter).equalTo(value).limitToFirst(15);

  nextQuery.once('value', snapshot => {
    let snapshotWithoutVotes = {};
    snapshot.forEach(childSnapshot =>{
      const {archetype, authorId, created, deck, deckId, deckstring, description, downvotes, playerClass, patch, title, type, upvotes, views, votes} = childSnapshot.val();
      Object.assign(snapshotWithoutVotes, {
        [deckId]: {
          archetype,
          authorId,
          created,
          deck,
          deckId,
          deckstring,
          description,
          downvotes,
          playerClass,
          patch,
          title,
          type,
          upvotes,
          views,
          votes
        }
      });
    });
    callback(snapshotWithoutVotes);
  })
}








