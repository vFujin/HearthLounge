import React from 'react';
import PropTypes from 'prop-types';
import ManaCurveBar from './mana-curve-graph';

const ManaCurve = ({deck, max}) => {
  return (
      <ul className="graph">
        {[...new Array(7)].map((bar, i)=>
            <ManaCurveBar key={i} cost={i} icon={i} deck={deck} max={max} />
        )}
        <ManaCurveBar cost={7} icon="7-plus" deck={deck} max={max}/>
      </ul>
  )
};

export default ManaCurve;

ManaCurve.propTypes = {
  deck: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  max: PropTypes.number
};
