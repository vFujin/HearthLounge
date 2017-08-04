import React from 'react';
import PropTypes from 'prop-types';
import DSMinions from "./minions";
import DSSpells from "./spells";
import DSWeapons from "./weapons";

export const DSBodyBody = ({deck}) => {
  const {Minion, Spell, Weapon} = deck.types;

  return (
      <div className="deckSnippet__body--body">
        <DSMinions Minion={Minion}/>
        <DSSpells Spell={Spell}/>
        <DSWeapons Weapon={Weapon}/>
      </div>
  );
};

export default DSBodyBody;

DSBodyBody.propTypes = {
  deck: PropTypes.shape({
    Minion: PropTypes.number,
    Spell: PropTypes.number,
    Weapon: PropTypes.number
  })
};