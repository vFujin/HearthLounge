import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ExtensionBossImg = ({extension, wing, boss}) =>{
  return <img src={boss.img} alt={_.startCase(boss.url)} />;
};

export default ExtensionBossImg;

ExtensionBossImg.propTypes = {
  extension: PropTypes.string.isRequired,
  wing: PropTypes.string.isRequired,
  boss: PropTypes.shape({
    img: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};
