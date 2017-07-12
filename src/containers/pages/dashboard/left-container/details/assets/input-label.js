import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const InputLabel = ({id, title, value, disabled, handleInputChange, placeholder, type}) => {
  const capitalizedTitle = _.capitalize(title);

  return(
      <label htmlFor={id}>
        <p>{capitalizedTitle}</p>
        <div className="wrapper">
          <input onChange={(e)=>handleInputChange(e)} type={type || 'text'} placeholder={placeholder} disabled={!disabled} id={id} value={value} />
        </div>
      </label>
  )
};

export default InputLabel;

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};