import React from 'react';
import PropTypes from 'prop-types';
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
  cost: PropTypes.number,
  deck: PropTypes.object,
  icon: PropTypes.oneOfType(
      PropTypes.string,
      PropTypes.number
  ),
  max: PropTypes.number
};

export default ManaCurveBar;
