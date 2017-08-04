import React from 'react';
import PropTypes from 'prop-types';
import ManaCurve from "../../mana-curve";
import DSType from "./type";

export const DSHeader = ({archetype, hsClass, deck}) => {

  return (
      <div className="deckSnippet__body--header">
        <DSType archetype={archetype} hsClass={hsClass} />
        <ManaCurve deck={deck} max={deck.max}/>
      </div>
  );
};

export default DSHeader;

DSHeader.propTypes = {
  archetype: PropTypes.string.isRequired,
  deck: PropTypes.object.isRequired,
  hsClass: PropTypes.string.isRequired
};