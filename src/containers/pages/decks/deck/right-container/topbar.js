import React from 'react';
import PropTypes from 'prop-types';
import Votes from './topbar-assets/votes';
import CreatedDetails from './topbar-assets/created-details';
import Stats from './topbar-assets/stats';
import Archetype from './topbar-assets/archetype';

const Topbar = ({activeDeck, deckEditView, handleDeckVotingClick}) => {
  return (
      <div className="topbar">
        <div className="topbar__container topbar__grid topbar__grid--1-1">
          <div className="deck-details">
            <Votes activeDeck={activeDeck} handleDeckVotingClick={handleDeckVotingClick}/>
            <Stats activeDeck={activeDeck} deckEditing={deckEditView}/>
            <Archetype activeDeck={activeDeck}/>
          </div>
          <CreatedDetails activeDeck={activeDeck}/>
        </div>
      </div>
  )
};

export default Topbar;

Topbar.propTypes = {
  activeDeck: PropTypes.object,
  deckEditView: PropTypes.bool,
  handleDeckVotingClick: PropTypes.func
};

