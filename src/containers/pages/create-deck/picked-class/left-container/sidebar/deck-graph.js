import React from 'react';
import _ from 'lodash';

const DeckGraph = ({cost, deck, icon, max}) => {
  const costBelowSeven = (number) =>{
    return _.filter(deck, {cost: number}).length
  };
  let costSevenOrMore = _.filter(deck, (value)=>value.cost >= 7).length;

  let s = cost < 7 ? costBelowSeven(cost) : costSevenOrMore;
  console.log(s, costSevenOrMore)
  return (
      <li>
        <div className="count">{s}</div>
        <div className="bar">
          <span style={{height: `${(s/max)*100 || 0}%`}}></span>
        </div>
        <div className={`hs-icon icon-mana-${icon}`}></div>
      </li>
  );
};

export default DeckGraph;