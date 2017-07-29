import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, callback, type}) =>{
  return (
      <button className={`component btn btn__${type || 'default'}`}
              onClick={callback}>
        {text}
      </button>
  )
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  type: PropTypes.string
};