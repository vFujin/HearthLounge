import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const AdventureBossImg = ({adventure, wing, boss, type}) =>{
  const src = `https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/${type}/${adventure}/${wing}/${boss}.jpg`;

  return <img src={src} alt={_.startCase(boss)} />;
};

export default AdventureBossImg;

AdventureBossImg.propTypes = {
  adventure: PropTypes.string.isRequired,
  wing: PropTypes.string.isRequired,
  boss: PropTypes.string.isRequired,
};