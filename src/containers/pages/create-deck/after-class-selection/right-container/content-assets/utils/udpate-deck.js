import {uniqueCards} from "../../../../../../../utils/deck/calculate/index";
import filter from 'lodash/filter';

/**
 * Updates deck
 *
 * @param e - event
 * @param {object} card - card details, see http://hearthstoneapi.com/#data
 * @param {object[]} deck
 * @param {function} action - updates deck in redux state
 */
export default function(e, card, deck, action){
  let ifLegendary = card.rarity !== "Legendary" ? uniqueCards(deck, card) < 2 : uniqueCards(deck, card) < 1;
  const deckLength = deck.length;

  if (e.button === 0 && ifLegendary && deckLength < 30) {
    action(deck.concat(card));
  }

  if (e.button === 2 && uniqueCards(deck, card) > 0) {
    action(filter(deck, (c) => c.cardId !== card.cardId));
  }
};