import React from 'react';
import PropTypes from 'prop-types';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {rateDeck} from '../../../../server/decks/decks';
const Deck = ({activeUser, currentDeck}) => {

  const handleDeckVotingClick = (e) =>{
    let vote = e.currentTarget.id;
    const {deckId} = currentDeck;
    rateDeck(deckId, activeUser.uid, vote);
  };

  return (
      <div className="container__page container__page--twoSided deck">
        <LeftContainer currentDeck={currentDeck} />
        <RightContainer activeUser={activeUser}
                        currentDeck={currentDeck}
                        handleDeckVotingClick={handleDeckVotingClick} />
      </div>
  );
};

export default Deck;

Deck.propTypes = {
  currentDeck: PropTypes.object,
  updateComment: PropTypes.func
};