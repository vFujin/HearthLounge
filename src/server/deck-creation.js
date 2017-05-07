import {ref} from '../keys';
import {success, loading, error} from '../utils/messages';

export function saveDeck(hsClass, author, title, type, archetype, deck, description, uid){
  if(hsClass && author && title && type && archetype && deck && description && uid) {
    let newDeck = ref.child(`decks`).push({
      created: +new Date(),
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

    return newDeck.then(()=>loading('Uploading deck...'))
        .then(() => ref.child(`users/${uid}/decks`).push({
          deck: newDeckId
        })
        .then(() => success('Deck has been uploaded!'))
        .catch(err => error("Couldn't upload deck. " + err))
    );
  }
  else{
    error("Couldn't upload deck.")
  }
}