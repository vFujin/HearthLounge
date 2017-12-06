import {ref, firestore} from '../../../../keys';
import {error, success} from '../../../../utils/messages';

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
export default function (patch, playerClass, title, mode, archetype, adventure, boss, deck, description, deckstring, uid, author) {
  if (patch && playerClass && title && mode && archetype && deck && description && deckstring && uid && author) {
    const validateAdventureType = (mode === "adventures" && adventure && boss) ? "wild" : mode,
          validateAdventure = (adventure && boss) ? adventure : null,
          validateBoss = (adventure && boss) ? boss : null,
          initVotes = Math.floor(Math.random() * (1000 - 500 + 1)),
          deckId = ref.child(`decks`).push().key,
          created = +new Date();

    let newDeck = {
      archetype,
      deck,
      deckstring,
      description,
      playerClass,
      patch,
      title,
      author,
      deckId,
      created,
      updated: null,
      adventure: validateAdventure,
      authorId: uid,
      boss: validateBoss,
      comments: 0,
      downvotes: 0,
      mode: validateAdventureType,
      upvotes: 0,
      views: 0,
      votes: initVotes
    };

    firestore.collection("decks").doc(deckId).set(newDeck).then(()=>success("success")).catch(err => error(err, 6));
  }
  else {
    error("Couldn't upload deck.")
  }
}
