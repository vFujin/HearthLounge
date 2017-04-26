import {ref} from '../keys';

export function saveDeck(author, title, type, archetype, deck, description, uid){
  let newDeck =  ref.child(`decks`).push({
    created: + new Date(),
    author,
    title,
    type,
    archetype,
    upvotes: 0,
    downvotes: 0,
    patch: 'ungoro',
    description,
    deck
  });

  let newDeckId = newDeck.key;

  return newDeck.then(()=>ref.child(`users/${uid}/decks`).push({
        deck: newDeckId
      })
    );
}