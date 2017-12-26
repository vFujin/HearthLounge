import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({theme = 'dark', sideLength = 40}) =>{
  return (
      <div className={`loading-wrapper ${theme}`}>
        <div className="sk-folding-cube" style={{"width": sideLength, "height": sideLength}}>
          <div className="sk-cube1 sk-cube" />
          <div className="sk-cube2 sk-cube" />
          <div className="sk-cube4 sk-cube" />
          <div className="sk-cube3 sk-cube" />
        </div>
      </div>
  )
};

export default Loader;

Loader.propTypes = {
  theme: PropTypes.string
};