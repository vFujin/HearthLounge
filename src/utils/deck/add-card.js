import kebabCase from 'lodash/kebabCase';
import {removeApostrophe} from '../remove-apostrophe';

export default function (deck){
  let cards = {};

  deck.filter((card, i, self) => {
    const {cardSet, cost, name, type} = card;
    const amount = (self.indexOf(card) !== i) ? 2 : 1;

    Object.assign(cards, {
      [name]: {
        set: kebabCase(removeApostrophe(cardSet)),
        amount,
        cost,
        type
      }
    });
  });

  return cards;
}