import React from 'react';
import _ from 'lodash';

const ManaCurveBar = ({cost, deck, icon, max}) => {
  const costBelowSeven = (number) =>{
    return _.filter(deck, {cost: number}).length
  };
  let costSevenOrMore = _.filter(deck, (value)=>value.cost >= 7).length;
  let s = cost < 7 ? costBelowSeven(cost) : costSevenOrMore;

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

ManaCurveBar.propTypes = {
  cost: React.PropTypes.number,
  deck: React.PropTypes.array,
  icon: React.PropTypes.any, //either string or number
  max: React.PropTypes.number
};

export default ManaCurveBar;
