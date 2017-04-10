import React from 'react';
import _ from 'lodash';

const InputLabel = ({id, title, value, disabled, handleInputChange}) => {
  const capitalizedTitle = _.capitalize(title);
  return(
      <label htmlFor={id}>
        <p>{capitalizedTitle}</p>
        <div className="wrapper">
          <input onChange={(e)=>handleInputChange(e)} disabled={!disabled} id={id} value={value} />
        </div>
      </label>
  )
};

export default InputLabel;