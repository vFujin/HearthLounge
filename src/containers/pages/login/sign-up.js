import React from 'react';
import {Link} from 'react-router';
import Input from '../../shared-assets/form-assets/input';

const SignUp = ({ signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, handleInputChange, handleFormSubmit, handleCheckboxClick }) => {
  return (
      <div className="sign sign-up active">
        <form onSubmit={(e) => handleFormSubmit(e, signUp_email, signUp_password, signUp_username)}>
          <Input id="signUp_username"         type="text"     placeholder="Joe" handleInputChange={handleInputChange} value={signUp_username}/>
          <Input id="signUp_email"            type="email"    placeholder="Joe" handleInputChange={handleInputChange} value={signUp_email}/>
          <Input id="signUp_confirmEmail"     type="email"    placeholder="Joe" handleInputChange={handleInputChange} value={signUp_confirmEmail}/>
          <Input id="signUp_password"         type="password" placeholder="Joe" handleInputChange={handleInputChange} value={signUp_password}/>
          <Input id="signUp_confirmPassword"  type="password" placeholder="Joe" handleInputChange={handleInputChange} value={signUp_confirmPassword}/>

          <div className="input-wrapper">
            <div className="tos">
              <input onClick={handleCheckboxClick} id="tos" type="checkbox"/>
              <label htmlFor="tos">I agree to the <Link to="terms-of-service">terms of service</Link></label>
            </div>
          </div>
          {/*place for captcha*/}

          <div className="button-wrapper">
            <button className="btn-pearl">Submit</button>
          </div>
        </form>
      </div>
  );
};

export default SignUp;
