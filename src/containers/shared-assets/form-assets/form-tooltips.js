import React from 'react';

const requirementsObj = {
  list_symbol: "◇",
  username: ["start with letter", "be between 3-10 characters", "contain only [a-zA-Z] characters"],
  ['e-mail']: ["look like: example@example.com"],
  ['confirm_e-mail']: ["be the same as e-mail address written above"],
  password: ["be K"],
  confirm_password: ["be the same as password written above"],
  secret: ['be x']
};

const FormTooltips = (props) => {

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