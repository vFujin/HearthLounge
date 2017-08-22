import React from 'react';

export default (signUp_username, usernameFree) =>{
  if((!usernameFree && signUp_username.length < 3) || (usernameFree && signUp_username.length < 3)){
    return null;
  }
  if(usernameFree && signUp_username.length >= 3){
    return <span>x</span>;
  }
  if(!usernameFree && signUp_username.length >= 3) {
    return <span>✓</span>;
  }
};
