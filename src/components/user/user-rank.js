import React from 'react';
import PropTypes from 'prop-types';
import {rankSystem} from '../../containers/pages/rank/rank-system';
const UserRank = ({rank}) => {
  return (
      <div>
        <span className={`hs-icon icon-rank-${rankSystem(rank)}`}></span>
        <p>{rank}</p>
      </div>
  )
};

export default UserRank;

UserRank.propTypes = {
  rank: PropTypes.number
};