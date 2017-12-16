import {ref, refParent, firestore} from '../../../../keys';
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
 * @param {string} author - User's username
 * @param {bool} isPrivate - If deck is either private or public
 */
export default function saveDeck (patch, playerClass, title, mode, archetype, adventure, boss, deck, description, deckstring, uid, author, isPrivate) {
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
      isPrivate,
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
    //those 2 separate db's may fuck up user decks if one will success and other won't
    firestore.collection("decks").doc(deckId).set(newDeck)
      .then(()=>{
        refParent(`user-decks/${uid}`).update({[deckId]: deckId})
          .then(() => success("success"))
          .catch(err => error(err, 6));
      })
      .catch(err => error(err, 6));
  }
  else {
    error("Couldn't upload deck.")
  }
}
