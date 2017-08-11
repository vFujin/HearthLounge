import React from 'react';
import PropTypes from 'prop-types';

const Art = ({src, name}) => {
  return (
      <div className="container__blocks--block-content art">
        <img src={src} alt={name}/>
      </div>
  )
};

export default Art;

Art.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};