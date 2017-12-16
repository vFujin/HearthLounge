import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Button from "../../../../../components/buttons/button";

const SignIn = ({handleInputChange, toggleResetPasswordViewClick, resetPasswordView, handleSignIn, handleResetPassword, signIn_email, resetPass_email }) => {

  return (
      <div className="sign sign-in">
        <form>
          {resetPasswordView
          ?<div className="input-wrapper">
                <label htmlFor="resetPass_email">E-mail:</label>
                <input id="resetPass_email"
                       type="text"
                       onChange={handleInputChange}
                       value={resetPass_email}/>
              </div>
              :<div className="input-wrapper">
                <label htmlFor="signIn_email">E-mail:</label>
                <input id="signIn_email"
                       type="text"
                       onChange={handleInputChange}
                       value={signIn_email}/>
              </div>
          }


          {resetPasswordView
              ? null
              : <div className="input-wrapper">
                <label htmlFor="signIn_password">Password:</label>
                <input id="signIn_password" type="password"/>
              </div>
          }

          {
            resetPasswordView
              ? <div className="button-wrapper">
              <Button text="Reset password"
                      handleClick={(e) => handleResetPassword(e, resetPass_email)}
                      type="submit--light"/>
                <Link to="/sign-in" onClick={toggleResetPasswordViewClick}>
                  Cancel
                </Link>
              </div>
              : <div className="button-wrapper">
              <Button text="Submit"
                      handleClick={(e) => handleSignIn(e, signIn_email)}
                      type="submit--light"/>
                <Link onClick={toggleResetPasswordViewClick} className="btn btn__default" to="/sign-in/reset-password">
                  Forgot password?
                </Link>
              </div>
          }
        </form>
      </div>
  );
};

SignIn.reactProptypes = {
  handleInputChange: PropTypes.func,
  handleSignIn: PropTypes.func,
  signIn_email: PropTypes.string
};

export default SignIn;