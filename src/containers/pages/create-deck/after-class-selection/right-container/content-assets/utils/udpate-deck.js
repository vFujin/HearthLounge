import {uniqueCards} from "../../../../../../../utils/deck/calculate/index";
import _ from 'lodash';

/**
 * Updates deck
 *
 * @param e - event
 * @param {object} card - card details, see http://hearthstoneapi.com/#data
 * @param {object[]} deck
 * @param {function} action - updates deck in redux state
 * @param {boolean} decklistClick
 */
export default function(e, card, deck, action, decklistClick = false){
  let ifLegendary = card.rarity !== "Legendary" ? uniqueCards(deck, card) < 2 : uniqueCards(deck, card) < 1;
  const deckLength = deck.length;

  if (e.button === 0 && !decklistClick && ifLegendary && deckLength < 30) {
    action(deck.concat(card));
  }

  if ((e.button === 2 || (e.button === 0 && decklistClick)) && uniqueCards(deck, card) > 0) {
    if(uniqueCards(deck, card) === 2) {
      action(_.uniqWith(deck, _.isEqual));
    }

    if(uniqueCards(deck, card) === 1){
      action(_.filter(deck, c => c.cardId !== card.cardId));
    }
  }
};