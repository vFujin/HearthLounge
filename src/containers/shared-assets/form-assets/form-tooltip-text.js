import React from 'react';
import {requirementsObj} from '../../../data/form-requirements';

const FormTooltipText = props => {

  const requirement = (id) =>{
    return (
      requirementsObj[id].map((r, i) =>
        <li key={i}>
          <i>{requirementsObj.list_symbol}</i>
          <p>{r}</p>
        </li>
      )
    );
  };

  const requirementsList = (id, label) =>{
    return (
        <div>
          <p className="tooltip-label">{label} should:</p>
          <ul className="input-tooltip-list">
            {requirement(id)}
          </ul>
        </div>
    )
  };

  const tooltipText = (id, label) => {
    switch(id){
      case id: return requirementsList(id, label);
      default: return null;
    }
  };

  return (
      <div className="tooltip-text">{tooltipText(props.id, props.label)}</div>
  )
};

export default FormTooltipText;