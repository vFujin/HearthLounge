import React from 'react';

const FormTooltips = (props) => {
  return (
      <div className={`err  ${props.display === true ? "death-knight active" : "display-none"}`}>
        <span className="caret-left"></span>
        <p>E-mail addresses do not match!</p>
      </div>
  )
};

export default FormTooltips;