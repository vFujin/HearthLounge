import React from 'react';
import PropTypes from 'prop-types';

const StepProgressBar = ({signUp_firstStep, signUp_secondStep}) =>{
  const signUpFirstStepStatus = () =>{
    switch(signUp_firstStep){
      case 'success': return <span>✓</span>;
      case 'failure': return <span>x</span>;
      default: return "1";
    }
  };
  const signUpSecondStepStatus = () =>{
    switch(signUp_secondStep){
      case 'success': return <span>✓</span>;
      case 'failure': return <span>x</span>;
      default: return "2";
    }
  };

  const signUpFirstStepStatusClass = () => {
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
        <li>{signUpSecondStepStatus()}</li>
      </ul>
  )
};

export default StepProgressBar;

StepProgressBar.propTypes = {
  signUp_firstStep: PropTypes.string.isRequired,
  signUp_secondStep: PropTypes.string
};