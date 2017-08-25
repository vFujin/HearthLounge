import React from 'react';
import PropTypes from 'prop-types';
import {wrapDate} from "../../../utils/wrap-date";

export const DSAbout = ({username, title, created}) => {

  return (
    <div className="deckSnippet__header--about">
      <div className="deckSnippet__header--about-title">{title}</div>
      <div className="deckSnippet__header--about-author">{username}</div>
      <div className="deckSnippet__header--about-created">{wrapDate(created/1000, false, '', false)}</div>
    </div>
  );
};

export default DSAbout;

DSAbout.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired
};