import React from 'react';
import PropTypes from 'prop-types';

const Archetype = ({currentDeck}) =>{
  return (
      <div className="deck-details-wrapper archetype">
        <p className={`${currentDeck.hsClass} active`}>{`${currentDeck.archetype} ${currentDeck.hsClass}`}</p>
      </div>
  )
};

export default Archetype;

Archetype.propTypes = {
  currentDeck: PropTypes.object
};