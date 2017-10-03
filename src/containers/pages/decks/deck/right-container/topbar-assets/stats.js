import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../../../components/icon";

const Stats = ({activeDeck, deckEditView}) =>{
  console.log(activeDeck);
  return (
      <div className={`deck-details-wrapper stats ${deckEditView ? 'edit-mode' : ''}`}>
        <Icon name="minions"/><p>{activeDeck.deck.types.Minion || 0}</p>
        <Icon name="fire"/><p>{activeDeck.deck.types.Spell || 0}</p>
        <Icon name="warrior"/><p>{activeDeck.deck.types.Weapon || 0}</p>
      </div>
  )
};

export default Stats;

Stats.propTypes = {
  activeDeck: PropTypes.shape({
    deck: PropTypes.shape({
        types: PropTypes.shape({
          Minion: PropTypes.number,
          Spell: PropTypes.number,
          Weapon: PropTypes.number,
        })
    })
  })
};