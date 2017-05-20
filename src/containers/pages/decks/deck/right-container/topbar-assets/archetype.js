import React from 'react';
import PropTypes from 'prop-types';

const Archetype = ({currentDeck}) =>{
  const {hsClass, archetype} = currentDeck;

  return (
      <div className="deck-details-wrapper archetype">
        <p className={`${hsClass} active`}>
          {`${archetype} ${hsClass}`}
        </p>
      </div>
  )
};

export default Archetype;

Archetype.propTypes = {
  currentDeck: PropTypes.object
};