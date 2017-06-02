import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({handleInputChange, handleSignIn, signIn_email, signIn_password}) => {
  return (
      <div className="sign sign-in">
        <form>
          <div className="input-wrapper">
            <label htmlFor="username-email">E-mail:</label>
            <input id="signIn_email"
                   onChange={handleInputChange}
                   value={signIn_email}
                   type="text"/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input id="signIn_password"
                   onChange={handleInputChange}
                   value={signIn_password} type="password"/>
          </div>

          <div className="button-wrapper">
            <button onClick={(e) => handleSignIn(e, signIn_email, signIn_password, ()=>e.message)} className="btn-pearl">
              Submit
            </button>
          </div>
        </form>
      </div>
  );
};

SignIn.reactProptypes = {
  handleInputChange: PropTypes.func,
  handleSignIn: PropTypes.func,
  signIn_email: PropTypes.string,
  signIn_password: PropTypes.string
};

export default SignIn;