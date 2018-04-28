import React from 'react';
import PropTypes from 'prop-types';
import DeckVotes from "./deck-stats/votes";
import Stats from "./deck-stats/stats";
import Archetype from "./deck-stats/archetype";

const DeckStats = ({activeDeck, activeDeckCopy, deckEditView}) =>{
  return (
      <div className="deck-details">
        <DeckVotes />
        <Stats activeDeckCopy={activeDeckCopy} deckEditing={deckEditView}/>
        <Archetype activeDeck={activeDeck}/>
      </div>
  )
};

export default DeckStats;

DeckStats.propTypes = {
  activeDeck: PropTypes.object,
  activeDeckCopy: PropTypes.object,
  deckEditView: PropTypes.bool,
  handleDeckVotingClick: PropTypes.func
};