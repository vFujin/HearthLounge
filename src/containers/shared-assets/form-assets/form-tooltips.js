import React from 'react';

const requirementsObj = {
  list_symbol: "◇",
  username: ["start with letter", "be between 3-10 characters", "contain only [a-zA-Z] characters"],
  ['e-mail']: ["look like: example@example.com"],
  ['confirm_e-mail']: ["be the same as e-mail address written above"],
  password: ["be K"]
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

      case 'username': return requirements('username');
      case 'e-mail': return requirements('e-mail');
      case 'confirm_e-mail': return requirements('confirm_e-mail');
      case 'password': return requirements('password');
      case 'confirm_password': return "";
      case 'secret': return "Secret answer should";
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