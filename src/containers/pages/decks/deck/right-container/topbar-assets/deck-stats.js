import React from 'react';
import PropTypes from 'prop-types';
import Votes from "./deck-stats/votes";
import Stats from "./deck-stats/stats";
import Archetype from "./deck-stats/archetype";

const DeckStats = ({activeDeck, deckEditView, handleDeckVotingClick}) =>{
  return (
      <div className="deck-details">
        <Votes activeDeck={activeDeck} handleDeckVotingClick={handleDeckVotingClick}/>
        <Stats activeDeck={activeDeck} deckEditing={deckEditView}/>
        <Archetype activeDeck={activeDeck}/>
      </div>
  )
};

export default DeckStats;

DeckStats.propTypes = {
  activeDeck: PropTypes.object,
  deckEditView: PropTypes.bool,
  handleDeckVotingClick: PropTypes.func
};