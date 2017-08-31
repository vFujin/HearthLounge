import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const SignIn = ({handleInputChange, handleSignIn, signIn_email}) => {

  return (
      <div className="sign sign-in">
        <form>
          <div className="input-wrapper">
            <label htmlFor="username-email">E-mail:</label>
            <input id="signIn_email"
                   type="text"
                   onChange={handleInputChange}
                   value={signIn_email}/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input id="signIn_password" type="password"/>
          </div>

          <div className="button-wrapper">
            <button onClick={(e) => handleSignIn(e, signIn_email)} className="btn-pearl">
              Submit
            </button>
            <Link to="/sign-in/reset-password">
              Forgot password?
            </Link>
          </div>
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