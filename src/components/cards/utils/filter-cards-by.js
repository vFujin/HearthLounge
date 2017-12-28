import _ from 'lodash';

export const filterCardsByMode = (info, cards, mode) =>{
  const {standard} = info;
  const {allCards} = cards;
  const mergedStandardSets = standard.map(set => [].concat(cards[set]));
  const allStandardCards = [].concat(...mergedStandardSets);

  if(mode === "standard") {
    return allStandardCards;
  }
  return allCards;
};

export const filterCardsByCardSet= (cards, cardSet) =>{
  return cards[cardSet];
};

export const filterCardsByPlayerClass = (info, cards, playerClass, mode) =>{
  return filterCardsByMode(info, cards, mode).filter(card => (card.playerClass === playerClass) || card.playerClass === "Neutral");
};

export const matchFilteredCards = (filters, card) =>{
  const filterObj = Object.entries(filters);
  if (filterObj.length > 0) {
    return filterObj.every(filter => {
      const filterKey = filter[0],
        filterValue = filter[1];

      if(filterValue && card[filterKey] && filterValue.constructor === Array){
        if(filterValue.every(element => typeof element === 'number')) {
          return card[filterKey] >= filterValue[0] && card[filterKey] <= filterValue[1];
        }
        if(filterValue.every(element => typeof element === 'string')){
          return filterValue.includes(card[filterKey]);
        }
      }

      if(filterKey === "mechanic" && card[`${filterKey}s`]){
        const mappedCardMechanics = card[`${filterKey}s`].map(mechanic=>mechanic[`name`]);
        return filterValue.some(mechanic => mappedCardMechanics.includes(mechanic));
      }

      return _.kebabCase(_.toLower(card[filterKey])) == _.kebabCase(_.toLower(filterValue));
    });
  }
  return card;
};

export const filterCards = (loadedCards, filters, prefilter) => {
  if(prefilter) {
    return prefilter
      .slice(9)
      .filter(card => matchFilteredCards(filters, card))
      .slice(0, loadedCards);
  }
};