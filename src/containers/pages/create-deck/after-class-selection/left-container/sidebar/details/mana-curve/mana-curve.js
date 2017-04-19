import React from 'react';
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

ManaCurve.propTypes = {
  deck: React.PropTypes.array,
  max: React.PropTypes.number
};

export default ManaCurve;