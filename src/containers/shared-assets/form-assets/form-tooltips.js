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


  function requirement(id){
    return (
      requirementsObj[id].map((r, i)=>
        <li key={i}>
          <i>{requirementsObj.list_symbol}</i>
          <p>{r}</p>
        </li>
      )
    );
  }


  function requirements(id){
    return (
        <ul className="input-tooltip-list"><i className="input-tooltip-header">{id}</i> should:
          {requirement(id)}
        </ul>
    )
  }



  function tooltip(id){
    switch(id){
      case id: return requirements(id);
    }
  }

  return (
      <div className={`input-tooltip ${props.tooltip === true ? "active" : "display-none"}`}>
        <span className="input-tooltip-caret-left"></span>
        {tooltip(props.id)}
      </div>
  )
};

export default FormTooltips;