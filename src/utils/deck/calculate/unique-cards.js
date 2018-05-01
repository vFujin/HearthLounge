import filter from 'lodash/filter';

export default function (deck, card){
  let cardId = typeof card === 'object' ? card.cardId : card;
  const filteredCard = filter(deck, {cardId});

  return filteredCard.length;
};