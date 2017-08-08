import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({adventure, wingUrl, bossUrl, bossName, wingName}) => {
  return (
    <div className="container__boss--block-content">
      <img
          src={`https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/adventures/${adventure}/${wingUrl}/${bossUrl}.jpg`}
          alt={bossName}/>
      <p>{bossName} is a (#) boss in {wingName}</p>
    </div>
  )
};

export default Overview;