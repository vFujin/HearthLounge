import React from 'react';
import _ from 'lodash';
import Tooltip from 'antd/lib/tooltip';
import FormTooltipText from '../../containers/shared-assets/form-assets/form-tooltip-text';
import './input-styles.css';

const Input = ({id, type, placeholder, handleInputChange, value, pattern, error, siblingValue}) =>{
  const label = _.startCase(_.trimStart(id, 'signUp'));
  const hideTooltip = (!_.isEmpty(siblingValue) && !_.isEmpty(value)) && (siblingValue === value);

  const inputClass = () =>{
    if(!siblingValue){
      return undefined;
    } else {
      if (siblingValue) {
        if (siblingValue.length === value.length) {
          if (!(siblingValue === value)) {
            return "siblings-not-matched"
          }
          return "siblings-matched"
        }
        return undefined;
      }
    }
  };

  const tooltipText = () =>{
    if(error){
      return error
    } else {
      if (siblingValue) {
        if (siblingValue.length === value.length) {
          if (!(siblingValue === value)) {
            return `${_.startCase(type)}s don't match!`;
          }
        }
      }
      return <FormTooltipText id={id} label={label}/>
    }
  };

  return (
      <div className="input-wrapper">
          <label htmlFor={id}>{label}:
            <div className="input-wrapper">
              <Tooltip overlayClassName={`form-tooltip ${hideTooltip ? "display-none" : undefined}`}
                       title={tooltipText()} placement="right" trigger="focus">
              <input id={id}
                     type={type}
                     placeholder={placeholder || null}
                     onChange={(e)=>handleInputChange(e)}
                     className={inputClass()}
                     value={value}
                     pattern={pattern}/>
              </Tooltip>
            </div>

          </label>
      </div>
  )
};



export default Input;