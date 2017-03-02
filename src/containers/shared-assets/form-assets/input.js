import React from 'react';
import FormTooltips from './form-tooltips';

const Input = props =>{

  // const type = () =>{
  //   switch(props.type){
  //     case 'e-mail':
  //       return (type={props.type} placeholder={props.placeholder || "")
  //       )
  //   }
  // };

  return (
      <div className="input-wrapper">
        <label htmlFor={props.id}>{props.label}:</label>
          <input onChange={props.handleInputChange}
                 onBlur={props.hideTooltip.bind(this)}
                 onFocus={props.showTooltip.bind(this)}
                 type={props.type}
                 id={props.id}
                 placeholder={props.placeholder || ""}/>
        <FormTooltips display={`${props.id}_tooltip`}/>
      </div>
  )
};

export default Input;