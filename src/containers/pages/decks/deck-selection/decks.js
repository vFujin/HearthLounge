import React from 'react';
import PropTypes from 'prop-types';

const Decks = ({children}) => {
  return children;
};

Decks.propTypes = {
  children: PropTypes.element.isRequired
};

export default Decks;