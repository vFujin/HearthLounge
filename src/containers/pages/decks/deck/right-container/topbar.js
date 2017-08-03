import React from 'react';
import Votes from './topbar-assets/votes';
import CreatedDetails from './topbar-assets/created-details';
import Stats from './topbar-assets/stats';
import Archetype from './topbar-assets/archetype';

const Topbar = ({currentDeck, deckEditing, handleDeckVotingClick}) => {
  return (
      <div className="topbar">
        <div className="topbar__container topbar__grid topbar__grid--1-1">
          <div className="deck-details">
            <Votes currentDeck={currentDeck} handleDeckVotingClick={handleDeckVotingClick}/>
            <Stats currentDeck={currentDeck} deckEditing={deckEditing}/>
            <Archetype currentDeck={currentDeck}/>
          </div>
          <CreatedDetails currentDeck={currentDeck}/>
        </div>
      </div>
  )
};


export default Topbar;