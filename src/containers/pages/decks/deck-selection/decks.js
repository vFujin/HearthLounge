import React from 'react';
import PropTypes from 'prop-types';

const Decks = ({children, cards}) => {
  return React.cloneElement(children, {cards: cards.allCards});
};

Decks.propTypes = {
  children: PropTypes.element.isRequired
};

export default Decks;