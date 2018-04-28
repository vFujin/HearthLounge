import React from 'react';
import PropTypes from 'prop-types';
import CreatedDetails from './created-details/created-details';
import DeckDetails from "./deck-details/deck-details";
import DeckAuthorDetails from "./deck-author-details/deck-author-details";

const Topbar = () => (
  <div className="topbar">
    <div className="topbar__container topbar__grid topbar__grid--3-4-1">
      <DeckDetails />
      <DeckAuthorDetails />
      <CreatedDetails />
    </div>
  </div>
);


export default Topbar;

Topbar.propTypes = {
  activeDeck: PropTypes.object
};

