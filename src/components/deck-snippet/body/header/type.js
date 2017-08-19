import React from 'react';
import PropTypes from 'prop-types';

export const DSBh_type = ({archetype, playerClass}) => {
  return (
      <div className="deckSnippet__body--header-type">{archetype} {playerClass}</div>
  );
};

export default DSBh_type;

DSBh_type.propTypes = {
  archetype: PropTypes.string.isRequired,
  playerClass: PropTypes.string.isRequired,
};