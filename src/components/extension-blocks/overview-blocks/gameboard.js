import React from 'react';
import PropTypes from 'prop-types';

const Gameboard = ({src, adventureName}) => {
  return (
      <div className="container__blocks--block-content gameboard">
        <img src={src} alt={`${adventureName}'s gameboard`}/>
      </div>
  )
};

export default Gameboard;

Gameboard.propTypes = {
  src: PropTypes.string,
  adventureName: PropTypes.string
};