import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../../../../components/icon";

const Stats = ({activeDeckCopy, deckEditView}) => {
  const minionCount = activeDeckCopy.types && activeDeckCopy.types.Minion,
        spellCount = activeDeckCopy.types && activeDeckCopy.types.Spell,
        weaponCount = activeDeckCopy.types && activeDeckCopy.types.Weapon;

  return (
      <div className={`deck-details-wrapper stats ${deckEditView ? 'edit-mode' : ''}`}>
        <Icon name="minions"/><p>{minionCount || 0}</p>
        <Icon name="fire"/><p>{spellCount || 0}</p>
        <Icon name="warrior"/><p>{weaponCount || 0}</p>
      </div>
  )
};

export default Stats;

Stats.propTypes = {
  activeDeckCopy: PropTypes.shape({
    types: PropTypes.shape({
      Minion: PropTypes.number,
      Spell: PropTypes.number,
      Weapon: PropTypes.number,
    })
  })
};