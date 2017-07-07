import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({expansion}) => {
  return (
      <div className="overview">
        <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/expansions/${expansion}.jpg`}
             alt={expansion}/>
      </div>
  );
};

export default Overview;

Overview.propTypes = {
  expansion: PropTypes.string.isRequired
};