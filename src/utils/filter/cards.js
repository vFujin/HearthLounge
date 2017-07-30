/**
 * Filters cards
 *
 * @param {Object[]} cards
 * @param {func} filter
 * @param {string} query
 * @param {number} currentItemsLoaded
 */

export const filterCards = (cards, filter, query, currentItemsLoaded) =>{
  return cards.filter(card => filter(card, query))
              .slice(0, currentItemsLoaded || 35)
};