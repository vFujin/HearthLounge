import React from 'react';
import NotFound from './not-found';

const ValidateURL = props =>{

  const validate = () =>{
    if(props.condition !== true){
      return <NotFound page={props.page} redirect={props.redirect}/>;
    }
    else{
      return props.content;
    }
  };

  return validate();
};

export default ValidateURL;