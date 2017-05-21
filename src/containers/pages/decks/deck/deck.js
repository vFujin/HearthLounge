import React from 'react';
import PropTypes from 'prop-types';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";

const Deck = ({currentDeck}) => {
  return (
      <div className="container__page container__page--twoSided deck">
        <LeftContainer currentDeck={currentDeck} />
        <RightContainer currentDeck={currentDeck} />
      </div>
  );
};

export default Deck;

Deck.propTypes = {
  currentDeck: PropTypes.object,
  updateComment: PropTypes.func
};