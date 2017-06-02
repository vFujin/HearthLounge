import React from 'react';
import PropTypes from 'prop-types';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {rateDeck} from '../../../../server/decks/decks';

const Deck = ({activeUser, currentDeck, params}) => {
  const handleDeckVotingClick = (e) =>{
    let vote = e.currentTarget.id;
    const {deckId} = currentDeck;
    rateDeck(deckId, activeUser.uid, vote);
  };

  return (
      <div className="container__page container__page--twoSided deck">
        <LeftContainer currentDeck={currentDeck}/>
        <RightContainer currentDeck={currentDeck}
                        params={params}
                        activeUser={activeUser}
                        handleDeckVotingClick={handleDeckVotingClick}/>
      </div>
  );
};

export default Deck;
