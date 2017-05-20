import React from 'react';
import Comment from '../view/comment';
const RightContainer = ({activeDeck}) =>{
  let votes = activeDeck.upvotes - activeDeck.downvotes;
  return (
      <div className="container__page--inner container__page--right">
        <div className="topbar">
          <div className="topbar__container topbar__grid topbar__grid--2-1-1">
            <div>
              <div className="deck-details">
                <div className="deck-details-wrapper votes">
                  <span className="hs-icon monk active-without-background icon-circle-up"></span>
                  <p className={votes >= 0 ? 'pos' : 'neg'}>{votes}</p>
                  <span className="hs-icon death-knight active-without-background icon-circle-down"></span>
                </div>
                <div className="deck-details-wrapper stats">
                  <span className="hs-icon icon-minions"></span><p>{activeDeck.deck.types.Minion || 0}</p>
                  <span className="hs-icon icon-fire"></span><p>{activeDeck.deck.types.Spell || 0}</p>
                  <span className="hs-icon icon-warrior"></span><p>{activeDeck.deck.types.Weapon || 0}</p>
                </div>
                <div className="deck-details-wrapper archetype">

                  <p className={`${activeDeck.hsClass} active`}>{`${activeDeck.archetype} ${activeDeck.hsClass}`}</p>
                </div>
              </div>
            </div>
            <div>
              deck url
            </div>
            <div>
              <p>{activeDeck.patch}</p>
              <p>{activeDeck.created}</p>
            </div>
          </div>
        </div>


        <div className="content">
          <div className="container__details">
            <div className="container__details--section container__details--description">
              <div className="section__header">
                <div className="line"></div>
                <h1>{activeDeck.title}</h1>
              </div>
              <div className="section__body">
                <div className="section__body--background">{activeDeck.description}</div>
              </div>
            </div>
            <div className="container__details--section container__details--comments">
              <div className="section__header">
                <div className="line"></div>
                <h1>104 comments</h1>
              </div>
              <div className="section__body">
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default RightContainer;