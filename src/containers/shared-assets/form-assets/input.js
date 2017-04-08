import React from 'react';
import FormTooltips from './form-tooltips';
import _ from 'lodash';

const Input = ({id, type, placeholder, handleInputChange, value}) =>{
  const label = _.startCase(_.trimStart(id, 'signUp'));

  return (
      <div className="input-wrapper">
        <label htmlFor={id}>{label}:</label>
          <input id={id}
                 type={type}
                 placeholder={placeholder}
                 onChange={(e)=>handleInputChange(e)}
                 value={value}/>
      </div>
  )
};

export default Input;