import kebabCase from 'lodash/kebabCase';
import {removeApostrophe} from '../remove-apostrophe';

export default function (deck){
  let cards = {};

  deck.filter((card, i, self) => {
    const {cardSet, cost, name, rarity, type} = card;
    const amount = (self.indexOf(card) !== i) ? 2 : 1;

    Object.assign(cards, {
      [name]: {
        amount,
        cost,
        set: kebabCase(removeApostrophe(cardSet)),
        rarity: kebabCase(rarity),
        type: kebabCase(type)
      }
    });
  });

  return cards;
}