import React from 'react';
import PropTypes from 'prop-types';
import ManaCurveBar from './mana-curve-graph';

const ManaCurve = ({deck, max, barHeight, barWidth, barSpacing, showCount, showIcons, padding}) => {
  return (
      <ul className="graph" style={{padding: padding || 0}}>
        {[...new Array(7)].map((bar, i)=>
            <ManaCurveBar key={i}
                          cost={i}
                          icon={i}
                          deck={deck}
                          max={max}
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
                      barHeight={barHeight}
                      barWidth={barWidth}
                      barSpacing={barSpacing}
                      showCount={showCount}
                      showIcons={showIcons}/>
      </ul>
  )
};

export default ManaCurve;

ManaCurve.propTypes = {
  deck: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  barHeight: PropTypes.string,
  barWidth: PropTypes.string,
  barSpacing: PropTypes.string,
  max: PropTypes.number,
  showCount: PropTypes.bool,
  showIcons: PropTypes.bool,
  padding: PropTypes.string,
};
