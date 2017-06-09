import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './sign-up/sign-up-form';
import StepProgressBar from './sign-up/step-progress-bar';

const SignUp = ({children, signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, signUp_firstStep, signUp_secondStep, handleInputChange, handleFormSubmit, handleUpdateProfileFormSubmit, handleCheckboxClick, tos, location}) => {

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
        : React.cloneElement(children, {handleInputChange, signUp_username, handleUpdateProfileFormSubmit});
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
  // signUp_username: PropTypes.string,
  signUp_email: PropTypes.string,
  signUp_confirmEmail: PropTypes.string,
  signUp_password: PropTypes.string,
  signUp_confirmPassword: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleCheckboxClick: PropTypes.func
};