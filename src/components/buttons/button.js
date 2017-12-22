import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, handleClick, type, darkBorder, active}) =>{
  const disabled = type === 'disabled' ? true : null;
  const btnType = type || "default";
  return (
      <button disabled={disabled}
              className={`component btn btn__${btnType} ${darkBorder && "btn__darkBorder"} ${active && `btn__${btnType}--active`}`}
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