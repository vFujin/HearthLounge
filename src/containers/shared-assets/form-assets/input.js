import React from 'react';
import _ from 'lodash';
import Tooltip from 'antd/lib/tooltip';
import FormTooltipText from './form-tooltip-text';

const Input = ({id, type, placeholder, handleInputChange, value}) =>{
  const label = _.startCase(_.trimStart(id, 'signUp'));

  return (
      <div className="input-wrapper">
        <Tooltip overlayClassName="form-tooltip" title={<FormTooltipText id={id} label={label}/>} placement="right" trigger="focus">
        <label htmlFor={id}>{label}:</label>
          <input id={id}
                 type={type}
                 placeholder={placeholder}
                 onChange={(e)=>handleInputChange(e)}
                 value={value}/>
        </Tooltip>
      </div>
  )
};

export default Input;