import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({adventure}) => {

  return (
      <div className="overview">
        <img src={`https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/adventures/${adventure}.jpg`}
             alt={adventure}/>
      </div>
  );
};

export default Overview;

Overview.propTypes = {
  adventure: PropTypes.string.isRequired,
};