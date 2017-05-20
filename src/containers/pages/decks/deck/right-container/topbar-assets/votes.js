import React from 'react';
import PropTypes from 'prop-types';

const Votes = ({currentDeck}) =>{
  const {upvotes, downvotes} = currentDeck;
  let votes = upvotes - downvotes;
  let voteResClass = votes >= 0 ? 'pos' : 'neg';
  
  return (
      <div className="deck-details-wrapper votes">
        <span className="hs-icon monk active-without-background icon-circle-up"></span>
        <p className={voteResClass}>{votes}</p>
        <span className="hs-icon death-knight active-without-background icon-circle-down"></span>
      </div>
  )
};

export default Votes;

Votes.propTypes = {
  currentDeck: PropTypes.object
};