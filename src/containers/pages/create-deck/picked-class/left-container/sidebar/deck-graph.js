import React, { Component } from 'react';
import _ from 'lodash';

const DeckGraph = props => {
  function foo(c){
    return props.deck.map(card=>card[c])
  }

  // console.log(_.map(props.deck, {cardId: foo('cardId')}).length) //deck length
  console.log(props.deck.map(card=>card.cost));
  return (
      <li>
        <div className="count">0</div>
        <div className="bar">
          <span></span>
        </div>
        <div className={`hs-icon icon-mana-${props.cost}`}></div>
      </li>
  );
};

export default DeckGraph;