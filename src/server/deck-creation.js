import {ref} from '../keys';

export function saveDeck(className, author, title, type, archetype, deck, description, uid){
  let newDeck =  ref.child(`decks`).push({
    created: + new Date(),
    upvotes: 0,
    downvotes: 0,
    patch: 'ungoro',
    className,
    author,
    title,
    type,
    archetype,
    description,
    deck
  });

  let newDeckId = newDeck.key;

  return newDeck.then(()=>ref.child(`users/${uid}/decks`).push({
        deck: newDeckId
      })
    );
}