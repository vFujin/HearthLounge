import React from 'react';
import PropTypes from 'prop-types';
import DSAbout from "./about";
import DSPlayerClass from "./player-class";

const DeckSnippetHeader = ({hsClass, username, title, created}) => {

    return (
      <div className="deckSnippet__header">
        <DSPlayerClass hsClass={hsClass}/>
        <DSAbout username={username}
                 title={title}
                 created={created} />
      </div>
  );
};

export default DeckSnippetHeader;

DeckSnippetHeader.propTypes = {
  hsClass: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired
};