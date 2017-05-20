import React from 'react';
import Comment from './view/comment';
import _ from 'lodash';
import ManaCurve from '../../create-deck/after-class-selection/left-container/sidebar/details/mana-curve/mana-curve'
const Deck = ({activeDeck}) => {
  let cardNames = Object.keys(activeDeck.deck.cards);
  return (
      <div className="container__page container__page--twoSided decks">
        <div className="container__page--inner container__page--left">
          <h3 className="sidebar__header">Deck Details</h3>
          <div className="sidebar__body">
            <div className="container__mana-curve">
              <h3>Mana Curve</h3>
              <ManaCurve deck={activeDeck.deck.cards} max={activeDeck.deck.max}/>
              <h3>Cards</h3>
              <div className="list cards-list">
                <div className="table-scroll">
                  <table>
                    <thead>
                    <tr>
                      <th>Set</th>
                      <th>Card</th>
                      <th>Amount</th>
                      <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {_.map(activeDeck.deck.cards).map((c, i)=>
                        <tr>
                          <td>set</td>
                          <td>{cardNames[i]}</td>
                          <td>{c.amount}</td>
                          <td><span className={`hs-icon icon-mana-${c.cost}`}></span></td>
                        </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
              <table>

              </table>
            </div>
            <div className="background">
              <span className={`hs-icon icon-${activeDeck.hsClass}`}></span>
            </div>

          </div>
        </div>
        <div className="container__page--inner container__page--right">
          <div className="topbar"></div>
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
      </div>
  );
};

export default Deck;