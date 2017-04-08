import React from 'react';
const SignIn = ({handleInputChange, handleSignIn, signIn_email, signIn_password}) => {
  return (
      <div className="sign sign-in">
        <form>
          <div className="input-wrapper">
            <label htmlFor="username-email">E-mail:</label>
            <input id="signIn_email"
                   onChange={(e) => handleInputChange(e)}
                   value={signIn_email} type="text"/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input id="signIn_password"
                   onChange={(e) => handleInputChange(e)}
                   value={signIn_password} type="password"/>
          </div>

          <div className="button-wrapper">
            <button onClick={(e) => handleSignIn(e, signIn_email, signIn_password)}
                    className="btn-pearl">Submit
            </button>
          </div>
        </form>
      </div>
  );
};

SignIn.reactProptypes = {
  handleInputChange: React.PropTypes.func,
  handleSignIn: React.PropTypes.func,
  signIn_email: React.PropTypes.string,
  signIn_password: React.PropTypes.string
};

export default SignIn;