import React from 'react';
import PropTypes from 'prop-types';
import DSHeader from "./header/header";
import DSBodyBody from "./body/body";
import DSBodyFooter from "./footer/footer";

const DeckSnippetBody = ({archetype, comments, deck, playerClass, views, votes}) => {

  return (
      <div className="deckSnippet__body">
        <DSHeader archetype={archetype}
                  deck={deck}
                  playerClass={playerClass}/>
        <DSBodyBody deck={deck}/>
        <DSBodyFooter views={views}
                      comments={comments}
                      votes={votes}/>
      </div>
  );
};

export default DeckSnippetBody;

DeckSnippetBody.propTypes = {
  archetype: PropTypes.string.isRequired,
  deck: PropTypes.object.isRequired,
  playerClass: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  votes:PropTypes.number.isRequired,
  comments: PropTypes.number
};