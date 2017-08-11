import React from 'react';
import PropTypes from 'prop-types';
import AdventureBossImg from "../../../../../components/images/adventure-boss";

const Overview = ({adventure, wing, boss}) => {
  return (
    <div className="container__blocks--block-content overview">
      <AdventureBossImg adventure={adventure} wing={wing.url} boss={boss.url}/>
      <p><span>{boss.name}</span> is a part of <span>{wing.wing_title}</span> wing</p>
    </div>
  )
};

export default Overview;

Overview.propTypes = {
  adventure: PropTypes.string.isRequired,
  wing: PropTypes.shape({
    wing_title: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  boss: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
};