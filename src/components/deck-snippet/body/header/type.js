import React from 'react';
import PropTypes from 'prop-types';

export const DSBh_type = ({archetype, hsClass}) => {
  return (
      <div className="deckSnippet__body--header-type">{archetype} {hsClass}</div>
  );
};

export default DSBh_type;

DSBh_type.propTypes = {
  archetype: PropTypes.string.isRequired,
  hsClass: PropTypes.string.isRequired,
};