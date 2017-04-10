import React from 'react';
const IconLabel = ({id, placeholder}) => {
  return(
      <label htmlFor={id}>
        <span className={`hs-icon icon-${id}`}></span>
        <input id={id} type="text" placeholder={placeholder}/>
      </label>
  )
};

export default IconLabel;