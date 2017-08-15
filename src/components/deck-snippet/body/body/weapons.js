import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../icon";

export const DSBb_weapons = ({Weapon}) => {
  return (
      <div className="deckSnippet__body--body-weapons">
        <Icon name="warrior"/>
        {Weapon || 0}
      </div>
  );
};

export default DSBb_weapons;

DSBb_weapons.propTypes = {
  Weapon: PropTypes.number
};