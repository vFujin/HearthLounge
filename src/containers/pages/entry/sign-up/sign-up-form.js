import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Input from '../../../shared-assets/form-assets/input';

const SignUpForm = ({signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, handleInputChange, handleFormSubmit, handleCheckboxClick, tos}) =>{
  return (
      <form onSubmit={handleFormSubmit}>
        <Input id="signUp_email"
               type="email"
               placeholder="hearth@lounge.com"
               handleInputChange={handleInputChange}
               value={signUp_email}/>
        <Input id="signUp_confirmEmail"     type="email"    placeholder="hearth@lounge.com" handleInputChange={handleInputChange} value={signUp_confirmEmail}/>
        <Input id="signUp_password"         type="password" placeholder="" handleInputChange={handleInputChange} value={signUp_password}/>
        <Input id="signUp_confirmPassword"  type="password" placeholder="" handleInputChange={handleInputChange} value={signUp_confirmPassword}/>

        <div className="input-wrapper">
          <div className="tos">
            <input onChange={handleCheckboxClick} id="tos" checked={tos} type="checkbox"/>
            <label htmlFor="tos">I agree to the <Link to="terms-of-service">terms of service</Link></label>
          </div>
        </div>
        {/*place for captcha*/}

        <div className="button-wrapper">
          <button className="btn-pearl">Submit</button>
          <Link to="/sign-up/update-profile">redirect</Link>
        </div>
      </form>
  )
};


export default SignUpForm;

SignUpForm.propTypes = {
  signUp_email: PropTypes.string,
  signUp_confirmEmail: PropTypes.string,
  signUp_password: PropTypes.string,
  signUp_confirmPassword: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleCheckboxClick: PropTypes.func
};