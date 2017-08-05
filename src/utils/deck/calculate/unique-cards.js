import filter from 'lodash/filter';

export default function (deck, card){
  const filteredCard = filter(deck, {cardId: card.cardId});

  return filteredCard.length;
};