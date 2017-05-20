import React from 'react';

const Topbar = ({currentDeck}) => {
  let votes = currentDeck.upvotes - currentDeck.downvotes;
  let voteResClass = votes >= 0 ? 'pos' : 'neg';
  return (
      <div className="topbar">
        <div className="topbar__container topbar__grid topbar__grid--2-1-1">
          <div>
            <div className="deck-details">
              <div className="deck-details-wrapper votes">
                <span className="hs-icon monk active-without-background icon-circle-up"></span>
                <p className={voteResClass}>{votes}</p>
                <span className="hs-icon death-knight active-without-background icon-circle-down"></span>
              </div>
              <div className="deck-details-wrapper stats">
                <span className="hs-icon icon-minions"></span><p>{currentDeck.deck.types.Minion || 0}</p>
                <span className="hs-icon icon-fire"></span><p>{currentDeck.deck.types.Spell || 0}</p>
                <span className="hs-icon icon-warrior"></span><p>{currentDeck.deck.types.Weapon || 0}</p>
              </div>
              <div className="deck-details-wrapper archetype">

                <p className={`${currentDeck.hsClass} active`}>{`${currentDeck.archetype} ${currentDeck.hsClass}`}</p>
              </div>
            </div>
          </div>
          <div>
            deck url
          </div>
          <div>
            <p>{currentDeck.patch}</p>
            <p>{currentDeck.created}</p>
          </div>
        </div>
      </div>
  )
};

export default Topbar;