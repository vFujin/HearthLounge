import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({currentDeck, deckEditing}) =>{
  let type = currentDeck.deck.types;

  return (
      <div className={`deck-details-wrapper stats ${deckEditing ? 'edit-mode' : ''}`}>
        <span className="hs-icon icon-minions"></span><p>{type.Minion || 0}</p>
        <span className="hs-icon icon-fire"></span><p>{type.Spell || 0}</p>
        <span className="hs-icon icon-warrior"></span><p>{type.Weapon || 0}</p>
      </div>
  )
};

export default Stats;

Stats.propTypes = {
  currentDeck: PropTypes.object
};