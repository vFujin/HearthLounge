import React from 'react';

const Button = ({content, handleButtonClick}) =>{
  return <button onClick={handleButtonClick}>{content}</button>;
};

export default Button;