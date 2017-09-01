import React from 'react';
import {Link} from 'react-router';

export const SignInResetPassword = ({handleInputChange, handleResetPassword, resetPass_email}) =>{
  return (
      <div className="sign reset-password">
        <form>
        <div className="input-wrapper">
          <label htmlFor="reset-password">E-mail:</label>
          <input id="reset-password"
                 onChange={handleInputChange}
                 value={resetPass_email}
                 type="text"/>
        </div>

        <div className="button-wrapper">
          <button onClick={(e) => handleResetPassword(e, resetPass_email)} className="btn-pearl">
            Submit
          </button>
          <Link to="/sign-in/reset-password">
            Forgot password?
          </Link>
        </div>
      </form>
      </div>
  )
};

export default SignInResetPassword;