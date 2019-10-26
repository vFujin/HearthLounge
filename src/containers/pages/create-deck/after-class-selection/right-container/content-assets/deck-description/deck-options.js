import React from 'react';
import PropTypes from 'prop-types';
import AboutDeck from './save-deck-assets/about-deck';
import Preview from './save-deck-assets/preview';

const DeckOptions = ({ playerClass }) => (
  <div className="container__details">
    <AboutDeck playerClass={playerClass} />
    <Preview />
  </div>
);

export default DeckOptions;

DeckOptions.propTypes = {
  playerClass: PropTypes.string,
};
