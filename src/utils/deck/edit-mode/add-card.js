import kebabCase from 'lodash/kebabCase';
import {removeApostrophe} from '../../remove-apostrophe';
//TODO: that should be renamed to convert deck array to object or something like that
export default function (deck){
  let cards = {};

  deck.filter((c, i, self) => {
    const {cardId, cardSet, cost, name, rarity, type} = c;
    const amount = (self.indexOf(c) !== i) ? 2 : 1;

    Object.assign(cards, {
      [name]: {
        amount,
        cost,
        cardId,
        set: kebabCase(removeApostrophe(cardSet)),
        rarity: kebabCase(rarity),
        type: kebabCase(type),
      }
    });
  });

  return cards;
}