import React from 'react';
import Select from 'react-select';
import 'whatwg-fetch';

const Select = props =>{

  const listCardNames = () =>{
    console.log(props.data.map(x=>x[0]));
  };

  return (
      <div className="select2">
        <input type="text" onChange={props.handleChange} />
        <div className="select2__option">{listCardNames()}</div>
      </div>
  )


};

export default Select;