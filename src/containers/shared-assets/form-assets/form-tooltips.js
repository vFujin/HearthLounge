import React from 'react';

const requirements = [
  {
    list_symbol: "◇",
    username: ["start with letter", "be between 3-10 characters", "contain only [a-zA-Z] characters"],
    email: [],
    password: []
  }
];

const FormTooltips = (props) => {

  function requirement(req, id){
    return(
      req[id].map((requirement, i)=>
          <div>
            <i>{req.list_symbol}</i>
            <p key={i}>{requirement}</p>
          </div>
      )
    )
  }

  function label(id){
    switch(id){
      case 'username':
        return (
            <ul className="input-tooltip-list">Username should:
              {requirements.map((requirements, i)=>
                  <li key={i}>
                    {requirement(requirements, id)}
                  </li>

              )}
            </ul>
        );
      case 'e-mail': return "E-mail address should contain:";
      case 'confirm_e-mail': return "";
      case 'password': return "Password should contain:";
      case 'confirm_password': return "";
      case 'secret': return "Secret answer should";
    }
  }

  return (
      <div className={`input-tooltip ${props.tooltip === true ? "active" : "display-none"}`}>
        <span className="input-tooltip-caret-left"></span>
        {label(props.id)}
      </div>
  )
};

export default FormTooltips;