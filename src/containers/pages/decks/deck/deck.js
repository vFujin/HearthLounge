import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {rateDeck} from '../../../../server/decks/decks';

const Deck = ({activeUser, currentDeck, params, updateDeckRating}) => {
  const handleDeckVotingClick = (e) =>{
    let vote = e.currentTarget.id;
    const {deckId} = currentDeck;
    const {uid} = activeUser;
    rateDeck(deckId, uid, vote, (voteType)=>updateDeckRating(voteType));
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

const mapStateToProps = (state) => {
  const {deckVote} = state.deckView;
  return {deckVote}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckRating: (deckVote) => (dispatch({
      type: 'UPDATE_DECK_RATING', deckVote
    })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

Deck.propTypes = {
  activeUser: PropTypes.object,
  currentDeck: PropTypes.object,
  params: PropTypes.object,
  updateDeckRating: PropTypes.func,
};