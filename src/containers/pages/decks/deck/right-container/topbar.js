import React from 'react';
import PropTypes from 'prop-types';
import CreatedDetails from './topbar-assets/created-details';
import DeckDetails from "./topbar-assets/deck-details";
import DeckAuthorDetails from "./topbar-assets/deck-author-details";

const Topbar = ({activeDeck}) => {
  return (
      <div className="topbar">
        <div className="topbar__container topbar__grid topbar__grid--3-4-1">
          <DeckDetails />
          <DeckAuthorDetails activeDeck={activeDeck}/>
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

