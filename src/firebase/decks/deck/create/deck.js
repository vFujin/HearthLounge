import {ref} from '../../../../keys';
import {success, error} from '../../../../utils/messages';

/**
 * Function representing deck saving to Firebase /decks and /users/:id/decks endpoint
 *
 * @param {string} patch - Current patch
 * @param {string} playerClass - Choosen Hearthstone player class after class selection
 * @param {string} title - Deck title
 * @param {string} mode - Deck type; i.e Standard, Wild, Brawl, Adventures
 * @param {string} archetype - Deck archetype + player class; i.e N'zoth Priest, Jade Shaman, Quest Rogue
 * @param {string || null} adventure - If deck mode is selected as 'Adventure' returns string, else null
 * @param {string || null} boss - If deck mode is selected as 'Adventure' and 'Boss' has been choosen, returns string, else null
 * @param {string[]} deck - Array of cards
 * @param {string} description - Deck description
 * @param {string} deckstring - Deck string
 * @param {string} uid - User ID
 */
export default function (patch, playerClass, title, mode, archetype, adventure, boss, deck, description, deckstring, uid) {
  if (patch && playerClass && title && mode && archetype && deck && description && deckstring && uid) {

    const validateAdventureType = (mode === 'adventures' && adventure && boss) ? mode : 'wild',
        validateAdventure = (adventure && boss) ? adventure : null,
        validateBoss = (adventure && boss) ? boss : null,
        validateBossClassFilter = (adventure && boss) ? `${boss}_${playerClass}` : null,
        deckId = ref.child(`decks`).push().key,
        timestamp = +new Date();

    let newDeck = {
      archetype,
      deck,
      deckstring,
      description,
      playerClass,
      patch,
      title,
      deckId,
      adventure: validateAdventure,
      authorId: uid,
      boss: validateBoss,
      comments: 0,
      created: timestamp,
      downvotes: 0,
      mode: validateAdventureType,
      upvotes: 0,
      views: 0,
      votes: 0,
      class_timestamp_votes: `${playerClass}_${timestamp}_${Math.floor(Math.random() * 1000)}`,
      mode_class: `${mode}_${playerClass}`,
      boss_class: validateBossClassFilter
    };

    let updates = {};
    updates[`/decks/${deckId}`] = newDeck;
    updates[`/user-decks/${uid}/${deckId}`] = newDeck.deckId;

    return ref.update(updates, success("Deck has been uploaded!"));
  }
  else {
    console.log(patch, playerClass, title, mode, archetype, adventure, boss, deck, description, deckstring, uid);
    error("Couldn't upload deck.")
  }
}
