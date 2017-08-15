import React from 'react';
import PropTypes from 'prop-types';

const Input = ({autoFocus, className, id, placeholder, onChange, type, value}) =>{
  return <input type={type || "text"}
                id={id || false}
                placeholder={placeholder || null}
                className={className || null}
                value={value}
                onChange={onChange || null}
                autoFocus={autoFocus || false}/>
};

export default Input;

Input.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]),
};