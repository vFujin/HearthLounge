import _ from 'lodash';

/**
 * Filters cards by mode (either standard or wild).
 * This is primary filter.
 * It filters cards before other filters (i.e by playerClass).
 *
 * @param {object} info - Game data info. See {@link https://market.mashape.com/omgvamp/hearthstone#info}
 * @param {object[]} cards - Cards to filter
 * @param {string} mode - I.e "standard"
 * @return {object[]} cards - Returns filtered cards
 */
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

/**
 * Filters cards by cardSet. Used in pages that are focused on extensions.
 *
 * @param {object[]} cards - Cards to filter
 * @param {string} cardSet - I.e "Naxxramas". For cardSets see `sets` object {@link https://market.mashape.com/omgvamp/hearthstone#info}
 * @return {Object} cards - Returns filtered cards by playerClass
 */
export const filterCardsByCardSet= (cards, cardSet) =>{
  return cards[cardSet];
};

/**
 * Filters cards by playerClass. Used in deck creation.
 * Before filtering by playerClass, cards are filtered by mode.
 *
 * @param {object} info - Game data info. See {@link https://market.mashape.com/omgvamp/hearthstone#info}
 * @param {object[]} cards - Cards to filter
 * @param {string} playerClass - I.e "Priest"
 * @param {string} mode - I.e "standard"
 * @return {Object[]} cards - Returns filtered cards by mode and playerClass
 */
export const filterCardsByPlayerClass = (info, cards, playerClass, mode) =>{
  return filterCardsByMode(info, cards, mode).filter(card => (card.playerClass === playerClass) || card.playerClass === "Neutral");
};

/**
 * Flexible filtering function to match any filter.
 * Used to filtering all object that card has, i.e health, mechanics, cost.
 *
 * @param {object} filters - I.e {health: [0, 10], cost: 4}
 * @param {object} card - See {@link https://market.mashape.com/omgvamp/hearthstone#single-card}
 * @return {boolean | object} - Either matches filter requirements or returns card object (only if the filter is card name)
 */
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

      if(filterValue === "7-plus"){
        return card[filterKey] >= 7;
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

/**
 * Final filtering function.
 *
 * @param {number} loadedCards - Currently loaded cards
 * @param {object} filters - I.e {playerClass: "Rogue", attack: 2}
 * @param {object[]} prefilter - Cards that are set by default requirements. I.e during creating deck there is playerClass filter.
 *                               For extensions there is cardSet predefined.
 *                               These filters are also prefiltered by mode.
 * @return {object[]} cards - Final filtered cards array
 */
export const filterCards = (loadedCards, filters, prefilter) => {
  if(prefilter) {
    return prefilter
      .filter(card => card.type !== "Hero")
      .filter(card => matchFilteredCards(filters, card))
      // .filter(card => (card.type === "Hero" && !card.armor) && card) need to filter out heroes
      .slice(0, loadedCards);
  }
};