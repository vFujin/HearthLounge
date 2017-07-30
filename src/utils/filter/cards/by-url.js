/**
 * Filters cards by query
 *
 * @param {object} card
 * @param {string} query
 * @return {boolean}
 */
import _ from 'lodash';
import {filterCards} from "../cards";

export const byUrl = (card, query) => {

  return Object.keys(query).every(function (queryKey) {
    // if (queryKey === 'mechanics') {
    //   console.log(queryKey);
    //   return query[queryKey].some(queryValue => {
    //     console.log(queryValue, card[queryKey].indexOf(queryValue) > -1);
    //     return card[queryKey].indexOf(queryValue) > -1;
    //   });
    // }
    if (query[queryKey].constructor === Array) {
      return query[queryKey].some(queryValue => {

        return card[queryKey] == queryValue
      });
    }
    else {
      console.log(query[queryKey])
      return card[_.toLower(_.trim(queryKey, 'card'))] == query[queryKey];
    }
  })
};

export const filterByUrl = (cards, query, currentCardsLoaded) =>{
  return filterCards(cards, byUrl, query, currentCardsLoaded)
};