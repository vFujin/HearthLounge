import React from 'react';

const requirementsObj = {
  list_symbol: "◇",
  username: ["start with letter", "be between 3-10 characters", "contain only [a-zA-Z] characters"],
  email: ["look like: example@example.com"],
  password: []
};

const FormTooltips = (props) => {


  function requirement(id){
    if(requirementsObj[id]){
      console.log(requirementsObj[id]);
      return (
        Object.values(requirementsObj[id].map((r,i)=>
          <li key={i}>
            <i>{requirementsObj.list_symbol}</i>
            <p>{r}</p>
          </li>
      )))
    }
  }


  function requirements(id){
    return (
        <ul className="input-tooltip-list"><i className="input-tooltip-header">{id}</i> should:
          {requirement(id)}
        </ul>
    )
  }



  function tooltip(id){
    debugger;
    switch(id){

      case 'username': return requirements(id);
      case 'e-mail': return requirements(id);
      case 'confirm_e-mail': return "";
      case 'password': return "Password should contain:";
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