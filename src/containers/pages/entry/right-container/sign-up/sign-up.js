import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './first-phase/sign-up-form';
import StepProgressBar from './step-progress-bar';

const SignUp = ({children, activeUser, usernameFree, signUp_username, signUp_avatar, signUp_firstStep, signUp_secondStep, handleInputChange, handleFormSubmit,
                  handleCheckboxClick, location, updateFormProperty, handleUpdateProfileFormSubmit}) => {

  const signUp = () =>{
    return (location.pathname === "/sign-up" || !activeUser)
        ? <SignUpForm handleInputChange={handleInputChange}
                      handleFormSubmit={handleFormSubmit}
                      handleCheckboxClick={handleCheckboxClick}/>
        : React.cloneElement(children, {
            handleInputChange,
            activeUser,
            signUp_username,
            usernameFree,
            signUp_avatar,
            updateFormProperty,
            signUp_firstStep,
            signUp_secondStep,
            handleUpdateProfileFormSubmit
          });
  };

  return (
      <div className="sign sign-up active">
        <StepProgressBar signUp_firstStep={signUp_firstStep}
                         signUp_secondStep={signUp_secondStep}/>
        {signUp()}
      </div>
  );
};

export default SignUp;

SignUp.propTypes = {
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleCheckboxClick: PropTypes.func
};