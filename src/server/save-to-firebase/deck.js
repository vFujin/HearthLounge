import {ref} from '../../keys';
import {success, loading, error} from '../../utils/messages';

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

    const deckId = ref.child(`decks`).push().key;

    /**
     * Deck object
     * @type {{created: number, edited: null, upvotes: number, downvotes: number, comments: Array, patch: string, views: number, hsClass: string, author: string, title: string, type: string, archetype: string, deck: string[], description: string, id}}
     */
    let newDeck = {
      created: + new Date(),
      edited: null,
      upvotes: 0,
      downvotes: 0,
      patch: 'ungoro',
      views: 0,
      votes: 0,
      hsClass,
      author,
      title,
      type,
      archetype,
      deck,
      description,
      deckId
    };

    let pushes = {};
    pushes[`/decks/${deckId}`] = newDeck;
    pushes[`/user-decks/${uid}/${deckId}`] = newDeck.deckId;

    return ref.update(pushes, success("Deck has been uploaded!"));
  }
  else{
    error("Couldn't upload deck.")
  }
}
