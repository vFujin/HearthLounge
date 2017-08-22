import React from 'react';
import _ from 'lodash';
import Tooltip from 'antd/lib/tooltip';
import FormTooltipText from '../../containers/shared-assets/form-assets/form-tooltip-text';

const Input = ({id, type, placeholder, handleInputChange, value, pattern, error}) =>{
  const label = _.startCase(_.trimStart(id, 'signUp'));

  return (
      <div className="input-wrapper">
        <Tooltip overlayClassName="form-tooltip" title={error ? error : <FormTooltipText id={id} label={label}/>} placement="right" trigger="focus">
          <label htmlFor={id}>{label}:
            <div className="input-wrapper">
              <input id={id}
                     type={type}
                     placeholder={placeholder || null}
                     onChange={(e)=>handleInputChange(e)}
                     value={value}
                     pattern={pattern}/>
            </div>
          </label>
        </Tooltip>
      </div>
  )
};



export default Input;