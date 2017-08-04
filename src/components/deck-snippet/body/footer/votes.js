import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../icons/icon";

export const DSVotes = ({votes}) => {
  return (
      <div className="deckSnippet__body--footer-votes">
        <Icon name="circle-up"/>
        <p>{votes || 0}</p>
      </div>
  );
};

export default DSVotes;

DSVotes.propTypes = {
  votes: PropTypes.number.isRequired
};