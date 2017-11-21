import React from 'react';
import PropTypes from 'prop-types';
import DSAbout from "./about";
import DSPlayerClass from "./player-class";

const DeckSnippetHeader = ({playerClass, author, title, created}) => {

    return (
      <div className="deckSnippet__header">
        <DSPlayerClass playerClass={playerClass}/>
        <DSAbout author={author}
                 title={title}
                 created={created} />
      </div>
  );
};

export default DeckSnippetHeader;

DeckSnippetHeader.propTypes = {
  playerClass: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired
};