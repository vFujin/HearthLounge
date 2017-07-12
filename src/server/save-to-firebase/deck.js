import {ref} from '../../keys';
import {success, error} from '../../utils/messages';

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
export function saveDeck(patch, hsClass, author, title, type, archetype, deck, description, uid){
  if(patch && hsClass && author && title && type && archetype && deck && description && uid) {

    const deckId = ref.child(`decks`).push().key;
    /**
     * Deck Object
     *
     * @type {{created: number, edited: null, upvotes: number, downvotes: number, patch: string, views: number, votes: number, hsClass: string, author: string, title: string, type: string, archetype: string, deck: string[], description: string, uid: string, deckId}}
     */
    let newDeck = {
      created: + new Date(),
      edited: null,
      upvotes: 0,
      downvotes: 0,
      views: 0,
      votes: 0,
      patch,
      hsClass,
      author,
      title,
      type,
      archetype,
      deck,
      description,
      uid,
      deckId
    };

    let updates = {};
    updates[`/decks/${deckId}`] = newDeck;
    updates[`/user-decks/${uid}/${deckId}`] = newDeck.deckId;

    return ref.update(updates, success("Deck has been uploaded!"));
  }
  else{
    error("Couldn't upload deck.")
  }
}
