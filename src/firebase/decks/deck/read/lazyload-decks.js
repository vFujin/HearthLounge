import {ref} from '../../../../keys';
import _ from 'lodash';
let now = new Date();
let week = now.setDate(now.getDate() - 7);
let lastKnownDeck = null;

export default function (resolve, reject) {
  let decksRef = ref.child('decks');

  console.log("bar");
  decksRef
      .orderByChild('created')
      .startAt(lastKnownDeck)
      .limitToFirst(15)
      .once('value', snapshot => {
        let decks = {};
        snapshot.forEach(childSnapshot => {
          lastKnownDeck = childSnapshot.child('created').val();
          const {archetype, authorId, created, deck, deckId, deckstring, description, downvotes, playerClass, patch, title, type, upvotes, views, votes} = childSnapshot.val();
          Object.assign(decks, {
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
        resolve(decks)
      }, err => reject(err));
}








