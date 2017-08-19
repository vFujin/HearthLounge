import React from 'react';
import PropTypes from 'prop-types';

const Archetype = ({currentDeck}) =>{
  const {playerClass, archetype} = currentDeck;

  return (
      <div className="deck-details-wrapper archetype">
        <p className={`${playerClass} active`}>
          {`${archetype} ${playerClass}`}
        </p>
      </div>
  )
};

export default Archetype;

Archetype.propTypes = {
  currentDeck: PropTypes.object
};