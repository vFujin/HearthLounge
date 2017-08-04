import React from 'react';
import PropTypes from 'prop-types';
import DSType from "./type";
import ManaCurve from "../../../mana-curve/mana-curve";

export const DSHeader = ({archetype, hsClass, deck}) => {

  return (
      <div className="deckSnippet__body--header">
        <DSType archetype={archetype} hsClass={hsClass} />
        <ManaCurve deck={deck.cards}
                   max={deck.max}
                   barHeight="20px"
                   barWidth="4px"
                   barSpacing="2px"
                   showCount={false}
                   showIcons={false}/>
      </div>
  );
};

export default DSHeader;

DSHeader.propTypes = {
  archetype: PropTypes.string.isRequired,
  deck: PropTypes.object.isRequired,
  hsClass: PropTypes.string.isRequired
};