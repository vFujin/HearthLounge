import {ref} from '../keys';
import {success, loading, error} from '../utils/messages';

/**
 * Function representing deck saving to Firebase /decks and /users/:id/decks endpoint
 *
 * @param {string} hsClass - Choosen Hearthstone player class after class selection
 * @param {string} author - User username
 * @param {string} title - Deck title
 * @param {string} type - Deck type; i.e Standard, Wild, Brawl, Adventures
 * @param {string} archetype - Deck archetype + player class; i.e N'zoth Priest, Jade Shaman, Quest Rogue
 * @param {string[]} deck - Array of card ID's
 * @param {string} description - Deck description
 * @param {string} uid - User ID
 */
export function saveDeck(hsClass, author, title, type, archetype, deck, description, uid){
  if(hsClass && author && title && type && archetype && deck && description && uid) {
    const deckId = ref.push().key;
    let newDeck = {
      created: +new Date(),
      edited: null,
      upvotes: 0,
      downvotes: 0,
      comments: [],
      patch: 'ungoro',
      views: 0,
      hsClass,
      author,
      title,
      type,
      archetype,
      deck,
      description,
      id: deckId
    };

    ref.child(`decks`)
        .push(newDeck)
        .then(() => ref.child(`users/${uid}/decks`).push(deckId, loading("Uploading deck..."))
        .then(() => success('Deck has been uploaded!'))
        .catch(err => error("Couldn't upload deck. " + err))
    );
  }
  else{
    error("Couldn't upload deck.")
  }
}