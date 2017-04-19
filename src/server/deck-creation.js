import {ref} from '../keys';
import _ from 'lodash';

export function saveDeck(author, title, type, archetype, deck, description, uid){
  let deckId = _.uniqueId();
  return ref.child(`decks/${deckId}`).update({
    created: + new Date(),
    author,
    title,
    type,
    archetype,
    upvotes: 0,
    downvotes: 0,
    patch: '',
    description,
    deck,
  })
    .then(()=>ref.child(`users/${uid}`).update({
      decks: _.concat(deckId)
    }));
}