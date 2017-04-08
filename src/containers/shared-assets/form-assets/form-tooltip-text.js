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
        <ul className="input-tooltip-list">{label} should:
          {requirement(id)}
        </ul>
    )
  };

  const tooltipText = (id, label) => {
    switch(id){
      case id: return requirementsList(id, label);
      default: return ''
    }
  };

  return (
      <div>{tooltipText(props.id, props.label)}</div>
  )
};

export default FormTooltipText;