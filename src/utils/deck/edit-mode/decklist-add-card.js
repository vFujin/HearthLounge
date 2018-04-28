import {deckBroaden, deckSimplification} from "./index";

export const decklistAddCard = (card, cards, fetchedDeckCopy, updateActiveDeckCopy) => {

  const deck = deckBroaden(fetchedDeckCopy, cards);

  let filteredCard = cards.allCards.find(c => c.name === card);
  if (filteredCard) {
    deck.push(filteredCard);

    let simplifiedDeck = deckSimplification(deck);
    updateActiveDeckCopy({deck: simplifiedDeck});
  }
};