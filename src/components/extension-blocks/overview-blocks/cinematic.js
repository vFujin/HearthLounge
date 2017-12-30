import React from 'react';
import PropTypes from 'prop-types';

const Cinematic = ({src}) => {
  return (
      <div className="container__blocks--block-content cinematic">
        <iframe src={src} title="youtube iframe" frameBorder="0"></iframe>
      </div>
  )
};

export default Cinematic;

Cinematic.propTypes = {
  src: PropTypes.string
};