import React from 'react';
import FormTooltips from './form-tooltips';

const Input = props =>{

  return (
      <div className="input-wrapper">
        <label htmlFor={props.id}>{props.label}:</label>
          <input onChange={props.handleInputChange}
                 onBlur={props.hideTooltip.bind(this)}
                 onFocus={props.showTooltip.bind(this)}
                 type={props.type}
                 id={props.id}
                 placeholder={props.placeholder || ""}/>
        <FormTooltips id={props.id}
                      label={props.label}
                      tooltip={props.tooltip}/>
      </div>
  )
};

export default Input;