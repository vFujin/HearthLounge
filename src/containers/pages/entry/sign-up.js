import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './sign-up/sign-up-form';

const SignUp = ({children, signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, handleInputChange, handleFormSubmit, handleCheckboxClick, tos, location}) => {

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
        : children;
  };

  return (
      <div className="sign sign-up active">
        <div className="progress-steps">
          <div className="circle">1</div>
          <div className="circle">2</div>
        </div>
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