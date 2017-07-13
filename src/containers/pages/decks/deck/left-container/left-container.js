import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ManaCurve from '../../../create-deck/after-class-selection/left-container/sidebar/details/mana-curve/mana-curve'
const LeftContainer = ({currentDeck}) =>{
  let cardNames = Object.keys(currentDeck.deck.cards);

  const listCards = () =>{
    return _.map(currentDeck.deck.cards).map((c, i)=>
        <tr key={i}>
          <td>set</td>
          <td>{cardNames[i]}</td>
          <td>{c.amount}</td>
          <td><span className={`hs-icon icon-mana-${c.cost}`}></span></td>
        </tr>
    )
  };

  return(
      <div className="container__page--inner container__page--left">
        <h3 className="sidebar__header">Deck Details  <span className={`hs-icon icon-${currentDeck.type === "standard" ? "mammoth" : currentDeck.type}`}></span>
        </h3>
        <div className="sidebar__body">
          <div className="container__mana-curve">
            <h3>Mana Curve</h3>
            <ManaCurve deck={currentDeck.deck.cards} max={currentDeck.deck.max}/>
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
                  {listCards()}
                  </tbody>
                </table>
              </div>
            </div>
            <table>
            </table>
          </div>
          <div className="background">
            <span className={`hs-icon icon-${currentDeck.hsClass}`}></span>
          </div>

        </div>
      </div>
  )
};

export default LeftContainer;

LeftContainer.propTypes = {
  currentDeck: PropTypes.shape({
    archetype: PropTypes.string,
    author: PropTypes.string,
    created: PropTypes.number,
    deck: PropTypes.shape({
      cards: PropTypes.object,
      manaCurve: PropTypes.array,
      types: PropTypes.object,
    }),
    deckId: PropTypes.string,
    description: PropTypes.string,
    hsClass: PropTypes.string,
    patch: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    views: PropTypes.number,
    upvotes: PropTypes.number,
    downvotes: PropTypes.number,
  })
};