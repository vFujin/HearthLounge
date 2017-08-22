import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, handleClick, type}) =>{
  const disabled = type === 'disabled' ? true : null;
  return (
      <button disabled={disabled} className={`component btn btn__${type || 'default'}`}
              onClick={handleClick}>
        {text}
      </button>
  )
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string
};