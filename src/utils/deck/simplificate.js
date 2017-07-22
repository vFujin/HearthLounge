import addCard from './add-card';
import {cardTypes, calcManaCurve, deckLength, maxCardsCostAmount} from './calculate';

export default function (deck){
  let cards = addCard(deck);
  let length = deckLength(deck);
  let max = maxCardsCostAmount(deck);
  let types = cardTypes(deck);
  let manaCurve = calcManaCurve(deck);

  return {
    cards,
    manaCurve,
    types,
    max,
    length
  };
}