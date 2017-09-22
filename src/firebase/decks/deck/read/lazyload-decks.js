import {ref} from '../../../../keys';
// import {success, loading, error} from '../../utils/messages';

let now = new Date();
let week = now.setDate(now.getDate() - 7);

export default function (resolve, reject) {
  let decksRef = ref.child('decks');
  let lastKnownDeck = null;
  let pageQuery =  decksRef.orderByChild('created').limitToFirst(15);

  pageQuery.once('value', snapshot=>{

    snapshot.forEach(childSnapshot=>{
      // if(childSnapshot.child('created').val() < week){
      //   return null;
      // }
      console.log(snapshot.val(), childSnapshot.child('created').val(), lastKnownDeck);
      lastKnownDeck = childSnapshot.child('created').val();
      console.log(lastKnownDeck)
    });
  }, err => reject(err));

    let nextQuery = decksRef.orderByChild('created').startAt(lastKnownDeck).limitToFirst(15);
    let snapshotWithoutVotes = {};
    nextQuery.once('value', snapshot => {
      // console.log("nextQ");

      snapshot.forEach(childSnapshot => {
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
      console.log(snapshotWithoutVotes, lastKnownDeck, nextQuery);
      resolve(snapshotWithoutVotes)
    }, err => reject(err));

}








