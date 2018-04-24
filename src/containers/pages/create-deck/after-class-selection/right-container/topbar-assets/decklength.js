import React from 'react';
import PropTypes from 'prop-types';

const Decklength = ({deck, maxLength = 30}) => {
  return (
    <div className="deck-length">
      <p>{deck.length} / {maxLength}</p>
    </div>
  )
};

Decklength.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object),
  maxLength: PropTypes.number,
  showLabel: PropTypes.string
};

Decklength.defaultProps = {
  deck: [],
  maxLength: 30
};

export default Decklength;