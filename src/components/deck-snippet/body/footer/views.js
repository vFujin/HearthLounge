import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../icon";

export const DSViews = ({views}) => {
  return (
      <div className="deckSnippet__body--footer-views">
        <Icon name="eye"/>
        <p>{views || 0}</p>
      </div>
  );
};

export default DSViews;

DSViews.propTypes = {
  views: PropTypes.number.isRequired
};