import {deckBroaden, deckSimplification} from "./index";

export const decklistRemoveCard = (e, cards, fetchedDeckCopy, updateActiveDeckCopy) =>{
  const deck = deckBroaden(fetchedDeckCopy, cards);
  const targetCardId = e.currentTarget.id;

  let updatedDeck = deck.filter(c => c.cardId !== targetCardId);
  let simplifiedDeck = deckSimplification(updatedDeck);

  updateActiveDeckCopy({deck: simplifiedDeck});
};