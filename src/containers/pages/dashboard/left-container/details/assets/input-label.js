import React from 'react';
import _ from 'lodash';

const InputLabel = ({id, title, value}) => {
  const capitalizedTitle = _.capitalize(title);
  
  return(
      <label htmlFor={id}>
        <p>{capitalizedTitle}</p>
        <input id={id} value={value} />
      </label>
  )
};

export default InputLabel;