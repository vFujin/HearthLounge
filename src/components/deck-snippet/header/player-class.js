import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'hearthlounge-design-system';

export const DSPlayerClass = ({ playerClass }) => {
  return (
    <div className="deckSnippet__header--playerClass">
      <Icon name={playerClass} />
    </div>
  );
};

export default DSPlayerClass;

DSPlayerClass.propTypes = {
  playerClass: PropTypes.string.isRequired,
};
