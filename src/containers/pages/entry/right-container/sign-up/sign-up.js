import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './first-phase/sign-up-form';
import StepProgressBar from './step-progress-bar';

const SignUp = ({children, activeUser, usernameFree, signUp_username, signUp_email, signUp_confirmEmail, signUp_password,
                  signUp_confirmPassword, signUp_avatar, signUp_firstStep, signUp_secondStep, handleInputChange, handleFormSubmit,
                  handleCheckboxClick, tos, location, updateFormProperty, handleUpdateProfileFormSubmit}) => {

  const signUp = () =>{
    return location.pathname === "/sign-up"
        ? <SignUpForm signUp_email={signUp_email}
                      signUp_confirmEmail={signUp_confirmEmail}
                      signUp_password={signUp_password}
                      signUp_confirmPassword={signUp_confirmPassword}
                      handleInputChange={handleInputChange}
                      handleFormSubmit={handleFormSubmit}
                      handleCheckboxClick={handleCheckboxClick}
                      tos={tos}/>
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
  signUp_username: PropTypes.string,
  signUp_email: PropTypes.string,
  signUp_confirmEmail: PropTypes.string,
  signUp_password: PropTypes.string,
  signUp_confirmPassword: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleCheckboxClick: PropTypes.func
};