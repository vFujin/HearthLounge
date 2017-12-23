import React from 'react';
import PropTypes from 'prop-types';
import DSType from "./type";
import ManaCurve from "../../../mana-curve/mana-curve";

export const DSHeader = ({archetype, playerClass, deck}) => {

  return (
      <div className="deckSnippet__body--header">
        <DSType archetype={archetype} playerClass={playerClass} />
        <ManaCurve manaCurveObj={deck.manaCurve}
                   max={deck.max}
                   barHeight="15px"
                   barWidth="4px"
                   barSpacing="2px"
                   barColor={playerClass}
                   showCount={false}
                   showIcons={false}/>
      </div>
  );
};

export default DSHeader;

DSHeader.propTypes = {
  archetype: PropTypes.string.isRequired,
  deck: PropTypes.object.isRequired,
  playerClass: PropTypes.string.isRequired
};