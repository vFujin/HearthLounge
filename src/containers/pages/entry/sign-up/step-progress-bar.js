import React from 'react';
import PropTypes from 'prop-types';

const StepProgressBar = ({signUp_firstStep, signUp_secondStep}) =>{
  console.log(signUp_firstStep, signUp_secondStep)
  const signUpFirstStepStatus = () =>{
    switch(signUp_firstStep){
      case 'success': return <span>✓</span>;
      case 'failure': return <span>x</span>;
      default: return "1";
    }
  };

  const signUpFirstStepStatusClass = () => {
    // debugger;
    switch(signUp_firstStep){

      case 'success': return "step-1-success";
      case 'failure': return "step-1-failure";
      default: return "step";
    }
  };

  const signUpSecondStepStatusClass = () => {
    switch(signUp_secondStep){
      case 'success': return "step-2-success";
      case 'failure': return "step-2-failure";
      default: return "step-2";
    }
  };

  const signUpStatus = () => {
    if(signUp_firstStep === "success") {
      return signUpSecondStepStatusClass();
    } else {
      return signUpFirstStepStatusClass();
    }
  };

  return (
      <ul className={`step-progress-bar ${signUpStatus()}`}>
        <li>{signUpFirstStepStatus()}</li>
        <li>2</li>
      </ul>
  )
};

export default StepProgressBar;