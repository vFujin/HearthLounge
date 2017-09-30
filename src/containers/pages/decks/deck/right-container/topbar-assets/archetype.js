import React from 'react';
import PropTypes from 'prop-types';

const Archetype = ({activeDeck}) =>{
  const {playerClass, archetype} = activeDeck;

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
  activeDeck: PropTypes.shape({
    playerClass: PropTypes.string,
    archetype: PropTypes.string
  })
};