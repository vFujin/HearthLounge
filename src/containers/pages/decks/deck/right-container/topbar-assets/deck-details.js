import React from 'react';
import PropTypes from 'prop-types';
import DeckVotes from "./deck-details/votes";
import DeckStats from "./deck-details/stats";
import Archetype from "./deck-details/archetype";

const DeckDetails = () =>{
  return (
      <div className="deck-details">
        <DeckVotes />
        <DeckStats />
        <Archetype />
      </div>
  )
};

export default DeckDetails;

DeckDetails.propTypes = {
  activeDeck: PropTypes.object,
  activeDeckCopy: PropTypes.object,
  deckEditView: PropTypes.bool,
  handleDeckVotingClick: PropTypes.func
};