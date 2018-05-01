import {deckBroaden, deckSimplification} from "./index";
import {uniqueCards} from "../calculate";
import _ from 'lodash';
export const decklistRemoveCard = (e, cards, fetchedDeckCopy, updateActiveDeckCopy) =>{
  const deck = deckBroaden(fetchedDeckCopy, cards);
  const targetCardId = e.currentTarget.id;

  if(uniqueCards(deck, targetCardId) === 2) {
    let updatedDeck = _.uniqWith(deck, _.isEqual);
    let simplifiedDeck = deckSimplification(updatedDeck);
    updateActiveDeckCopy({deck: simplifiedDeck});
  }

  if(uniqueCards(deck, targetCardId) === 1){
    let updatedDeck = deck.filter(c => c.cardId !== targetCardId);
    let simplifiedDeck = deckSimplification(updatedDeck);

    updateActiveDeckCopy({deck: simplifiedDeck});
  }
};