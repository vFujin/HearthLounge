import React from 'react';
import PropTypes from 'prop-types';

/**
 * Function representing Decks page container, that is DeckList page and DeckDetails page
 *
 * @param {object} children - Either DeckList or DeckDetails page, based on given URL
 * @param {object[]} cards - Array of all obtainable by player cards
 * @returns {*} - Returns DeckList and DeckDetails pages
 * @constructor
 */
const Decks = ({children, cards}) => {
  return React.cloneElement(children, {cards: cards.allCards});
};

Decks.propTypes = {
  children: PropTypes.element.isRequired
};

export default Decks;