import React from 'react';
import Votes from './topbar-assets/votes';
import CreatedDetails from './topbar-assets/created-details';
import DeckUrl from './topbar-assets/deck-url';
import Stats from './topbar-assets/stats';
import Archetype from './topbar-assets/archetype';

const Topbar = ({currentDeck, handleDeckVotingClick}) => {
  return (
      <div className="topbar">
        <div className="topbar__container topbar__grid topbar__grid--2-1-1">
          <div>
            <div className="deck-details">
              <Votes currentDeck={currentDeck} handleDeckVotingClick={handleDeckVotingClick}/>
              <Stats currentDeck={currentDeck}/>
              <Archetype currentDeck={currentDeck}/>
            </div>
          </div>
          <DeckUrl/>
          <CreatedDetails currentDeck={currentDeck}/>
        </div>
s
      </div>
  )
};

export default Topbar;