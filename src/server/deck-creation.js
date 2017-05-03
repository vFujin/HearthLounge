import {ref} from '../keys';

export function saveDeck(hsClass, author, title, type, archetype, deck, description, uid){
  let newDeck =  ref.child(`decks`).push({
    created: + new Date(),
    upvotes: 0,
    downvotes: 0,
    comments: [],
    patch: 'ungoro',
    hsClass,
    author,
    title,
    type,
    archetype,
    deck,
    description
  });

  let newDeckId = newDeck.key;

  return newDeck.then(()=>ref.child(`users/${uid}/decks`).push({
        deck: newDeckId
      })
    );
}