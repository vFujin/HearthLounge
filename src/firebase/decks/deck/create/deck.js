import {ref} from '../../../../keys';
import {success, error} from '../../../../utils/messages';

/**
 * Function representing deck saving to Firebase /decks and /users/:id/decks endpoint
 *
 * @param {string} patch - Current patch
 * @param {string} hsClass - Choosen Hearthstone player class after class selection
 * @param {string} author - User username
 * @param {string} title - Deck title
 * @param {string} type - Deck type; i.e Standard, Wild, Brawl, Adventures
 * @param {string} archetype - Deck archetype + player class; i.e N'zoth Priest, Jade Shaman, Quest Rogue
 * @param {string || null} adventure - If deck mode is selected as 'Adventure' returns string, else null
 * @param {string || null} boss - If deck mode is selected as 'Adventure' and 'Boss' has been choosen, returns string, else null
 * @param {string[]} deck - Array of cards
 * @param {string} description - Deck description
 * @param {string} uid - User ID
 */
export default function (patch, hsClass, author, title, type, archetype, adventure, boss, deck, description, uid){
  if(patch && hsClass && author && title && type && archetype && deck && description && uid) {

    const validateAdventureType = (type === 'adventures' && adventure && boss) ? type : 'wild';
    const validateAdventure = (adventure && boss) ? adventure : null;
    const validateBoss = (adventure && boss) ? boss : null;
    const deckId = ref.child(`decks`).push().key;

    let newDeck = {
      patch,
      hsClass,
      author,
      title,
      archetype,
      deck,
      description,
      deckId,
      created: + new Date(),
      upvotes: 0,
      downvotes: 0,
      views: 0,
      votes: 0,
      authorId: uid,
      type: validateAdventureType,
      adventure: validateAdventure,
      boss: validateBoss
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
