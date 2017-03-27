import React from 'react';
import _ from 'lodash';

const DeckGraph = props => {

  const costBelowSeven = (number) =>{
    return _.filter(props.deck, {cost: number}).length
  };
  let costSevenOrMore = props.deck.filter(card=>card.cost >= 7).length;

  return (
      <li>
        <div className="count">{props.cost < 7 ? costBelowSeven(props.cost) : costSevenOrMore}</div>
        <div className="bar">
          <span style={{height: `10%`}}></span>
        </div>
        <div className={`hs-icon icon-mana-${props.icon}`}></div>
      </li>
  );
};

export default DeckGraph;