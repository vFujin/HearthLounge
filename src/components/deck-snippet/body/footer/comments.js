import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../icons/icon";

export const DSComments = ({comments}) => {
  return (
      <div className="deckSnippet__body--footer-comments">
        <Icon name="bubbles2"/>
        <p>{comments || 0}</p>
      </div>
  );
};

export default DSComments;

DSComments.propTypes = {
  comments: PropTypes.number
};