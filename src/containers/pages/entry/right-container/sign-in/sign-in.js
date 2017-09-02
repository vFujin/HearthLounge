import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

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
                <button onClick={(e) => handleResetPassword(e, resetPass_email)} className="btn-pearl">
                  Reset password
                </button>
                  <Link onClick={toggleResetPasswordViewClick} to="/sign-in">
                    Cancel
                  </Link>
              </div>
              : <div className="button-wrapper">
                <button onClick={(e) => handleSignIn(e, signIn_email)} className="btn-pearl">
                  Submit
                </button>
                <Link onClick={toggleResetPasswordViewClick} to="/sign-in/reset-password">
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