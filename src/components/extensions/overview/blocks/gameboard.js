import React from 'react';
import PropTypes from 'prop-types';
import Slider from "../../../slider";

const Gameboard = ({src, adventureName}) => {
  console.log(typeof src);

  const gameboard = typeof src === "object"
    ? <Slider slides={[...src.map(g => <img src={g} alt=""/>)]} inset />
    : <img src={src} alt={`${adventureName}'s gameboard`}/>;

  return (
      <div className="container__blocks--block-content gameboard">
        {gameboard}
      </div>
  )
};

export default Gameboard;

Gameboard.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  adventureName: PropTypes.string
};
