import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../icon";

export const DSBb_spells = ({Spell}) => {
  return (
      <div className="deckSnippet__body--body-spells">
        <Icon name="fire"/>
        {Spell || 0}
      </div>
  );
};

export default DSBb_spells;

DSBb_spells.propTypes = {
  Spell: PropTypes.number
};