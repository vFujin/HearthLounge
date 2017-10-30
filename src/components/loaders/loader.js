import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({theme}) =>{
  return (
      <div className={`loading-wrapper ${theme || 'dark'}`}>
        <div className="sk-folding-cube">
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