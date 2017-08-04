import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../icons/icon";

export const DSBb_minions = ({Minion}) => {
  return (
      <div className="deckSnippet__body--body-minions">
        <Icon name="minions"/>
        {Minion || 0}
      </div>
  );
};

export default DSBb_minions;

DSBb_minions.propTypes = {
  Minion: PropTypes.number
};