import React from 'react';
import {requirementsObj} from '../../../data/form-requirements';

const FormTooltips = props => {

  function requirement(id) {
    return (
      requirementsObj[id].map((r, i) =>
        <li key={i}>
          <i>{requirementsObj.list_symbol}</i>
          <p>{r}</p>
        </li>
      )
    );
  }

  function requirements(id, label){
    return (
        <ul className="input-tooltip-list">{label} should:
          {requirement(id)}
        </ul>
    )
  }

  function tooltip(id, label){
    switch(id){
      case id: return requirements(id, label);
    }
  }

  return (
      <div className={`input-tooltip ${props.tooltip === true ? "active" : "display-none"}`}>
        <span className="input-tooltip-caret-left"></span>
        {tooltip(props.id, props.label)}
      </div>
  )
};

export default FormTooltips;