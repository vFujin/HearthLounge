import React from 'react';
import PropTypes from 'prop-types';

const Rewards = ({bossReward}) => {
  return (
      <div className="container__boss--block-content">
          <p>{bossReward}</p>
      </div>
  )
};

export default Rewards;