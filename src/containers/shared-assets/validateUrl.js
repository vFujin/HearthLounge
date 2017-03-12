import React from 'react';
import NotFound from './not-found';

const ValidateURL = props =>{

  const validate = () =>{
    if(props.condition !== true){
      return <NotFound page="adventure" url="adventures"/>;
    }
    else{
      return props.content;
    }
  };

  return validate();
};

export default ValidateURL;