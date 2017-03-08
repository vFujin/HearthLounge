import React from 'react';
import FormTooltips from './form-tooltips';

const Input = props =>{

  return (
      <div className="input-wrapper">
        <label htmlFor={props.id}>{props.label}:</label>
          <input onChange={props.handleInputChange.bind(this)}
                 onBlur={props.hideTooltip}
                 onFocus={props.showTooltip}
                 type={props.type}
                 id={props.id}
                 placeholder={props.placeholder}
                 value={props.value}
                 pattern={props.pattern || ""} />
        <FormTooltips id={props.id}
                      label={props.label}
                      tooltip={props.tooltip}/>
        {console.log(props.tooltip)}
      </div>
  )
};

export default Input;