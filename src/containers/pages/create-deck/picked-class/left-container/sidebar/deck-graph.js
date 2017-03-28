import React from 'react';
import _ from 'lodash';

const DeckGraph = props => {
  const{cost, deck, icon} = props;

  const costBelowSeven = (number) =>{
    return _.filter(deck, {cost: number}).length
  };
  let costSevenOrMore = deck.filter(card=>card.cost >= 7).length;

  const drawBars = () => {
    if(deck.filter(card=>card.cost === cost).length === 1){
      return 100;
    }
    return 0;
  };
  let s = cost < 7 ? costBelowSeven(cost) : costSevenOrMore;
  console.log(props.max, s, (s/props.max)*100);
  return (
      <li>
        <div className="count">{s}</div>
        <div className="bar">
          <span style={{height: `${(s/props.max)*100}%`}}></span>
        </div>
        <div className={`hs-icon icon-mana-${icon}`}></div>
      </li>
  );
};

export default DeckGraph;