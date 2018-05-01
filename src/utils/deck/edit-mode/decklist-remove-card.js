import {deckBroaden, deckSimplification} from "./index";
import {uniqueCards} from "../calculate";

export const decklistRemoveCard = (e, cards, fetchedDeckCopy, updateActiveDeckCopy) =>{
  const deck = deckBroaden(fetchedDeckCopy, cards);
  const targetCardId = e.currentTarget.id;

  if(uniqueCards(deck, targetCardId) === 2) {
    const updatedDeck = deck.filter((c, i, self) => {
      if(c.cardId === targetCardId) {
        return self.indexOf(c) === i
      } else {
        return c;
      }
    });

    let simplifiedDeck = deckSimplification(updatedDeck);
    updateActiveDeckCopy({deck: simplifiedDeck});
  }

  if(uniqueCards(deck, targetCardId) === 1){
    let updatedDeck = deck.filter(c => c.cardId !== targetCardId);
    let simplifiedDeck = deckSimplification(updatedDeck);

    updateActiveDeckCopy({deck: simplifiedDeck});
  }
};