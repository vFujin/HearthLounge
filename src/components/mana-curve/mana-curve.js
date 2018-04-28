import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ManaCurveBar from './mana-curve-graph';

const ManaCurve = ({deck = [], max = 1, barHeight, barWidth, barSpacing, showCount, showIcons, padding, barColor, manaCurveObj = 0}) => {
  if(manaCurveObj){
    return (
      <ul className="graph" style={{padding: padding || 0}}>
        {_.map(manaCurveObj).map((bar, i)=>
          <ManaCurveBar key={i}
                        cost={i}
                        icon={i === 7 ? "7-plus" : i}
                        deck={deck}
                        max={max}
                        barHeight={barHeight}
                        barWidth={barWidth}
                        barSpacing={barSpacing}
                        showCount={showCount}
                        manaCurveObj={bar}
                        barColor={barColor}
                        showIcons={showIcons}/>
        )}
      </ul>
    )
  } else {
    return (
      <ul className="graph" style={{padding: padding || 0}}>
        {[...new Array(7)].map((bar, i) =>
          <ManaCurveBar key={i}
                        cost={i}
                        icon={i}
                        deck={deck}
                        max={max}
                        barColor={barColor}
                        barHeight={barHeight}
                        barWidth={barWidth}
                        barSpacing={barSpacing}
                        showCount={showCount}
                        showIcons={showIcons}/>
        )}
        <ManaCurveBar cost={7}
                      icon="7-plus"
                      deck={deck}
                      max={max}
                      barColor={barColor}
                      barHeight={barHeight}
                      barWidth={barWidth}
                      barSpacing={barSpacing}
                      showCount={showCount}
                      showIcons={showIcons}/>
      </ul>
    )
  }
};

export default ManaCurve;

ManaCurve.propTypes = {
  deck: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  barHeight: PropTypes.string,
  barWidth: PropTypes.string,
  barSpacing: PropTypes.string,
  max: PropTypes.number,
  showCount: PropTypes.bool,
  showIcons: PropTypes.bool,
  padding: PropTypes.string,
  manaCurveObj: PropTypes.object
};
