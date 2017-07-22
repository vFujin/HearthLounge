import countBy from 'lodash/countBy';

export default function (deck) {
  return countBy(deck, card => card.cost < 7 ? card.cost : 7);
}