import _ from 'lodash';

export default function(deck, cards){
  const {loading, allCards} = cards;
  const deckCopy = _.map(deck.cards);

  _.map(deck.cards).map((c, i)=> {
    if(!loading) {
      let filteredCard = allCards.find(card => card.cardId === c.cardId);
      if (c.amount === 2) {
        deckCopy.push(filteredCard);
      }
      if (i !== -1) {
        deckCopy[i] = filteredCard
      }
    }
  });

  return deckCopy;
}