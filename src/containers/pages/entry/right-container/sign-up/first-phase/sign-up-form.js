import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Input from '../../../../../../components/inputs/input';
import Button from "../../../../../../components/buttons/button";
import {createUser} from "../../../../../../firebase/user/create";

class SignUpForm extends Component {
  handleCheckboxClick = (e) => {
    const {updateFormProperty} = this.props;
    let target = e.target;
    let checked = target.checked;
    updateFormProperty({tos: checked});
  };

  handleFormSubmit = (e) => {
    const {entry, updateSignUpStatus, updateActiveUser} = this.props;
    const {signUp_email, signUp_password} = entry;

    e.preventDefault();
    createUser(signUp_email, signUp_password, updateSignUpStatus, updateActiveUser);
  };

  render() {
    const {entry, handleInputChange} = this.props;
    const {signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos} = entry;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input id="signUp_email"
               type="email"
               placeholder="hearth@lounge.com"
               handleInputChange={handleInputChange}
               value={signUp_email}/>

        <Input id="signUp_confirmEmail"
               type="email"
               placeholder="hearth@lounge.com"
               handleInputChange={handleInputChange}
               value={signUp_confirmEmail}/>

        <Input id="signUp_password"
               type="password"
               handleInputChange={handleInputChange}
               value={signUp_password}/>

        <Input id="signUp_confirmPassword"
               type="password"
               handleInputChange={handleInputChange}
               value={signUp_confirmPassword}/>

        <div className="input-wrapper">
          <div className="tos">
            <input onChange={this.handleCheckboxClick} id="tos" checked={tos} type="checkbox"/>
            <label htmlFor="tos">I agree to the <Link to="terms-of-service">terms of service</Link></label>
          </div>
        </div>
        {/*place for captcha*/}

        <div className="button-wrapper">
          <Button text="Submit" type="submit--light" requiresAuth={false}/>
          <Link to="/sign-up/update-profile">redirect</Link>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state =>{
  const {entry} = state;
  return {entry};
};

const mapDispatchToProps = dispatch =>{
  return {
    updateFormProperty: (props) => (dispatch({
      type: 'EDIT_FORM_PROPERTY', props
    })),
    updateSignUpStatus: (signUp_firstStep, signUp_secondStep) => (dispatch({
      type: 'UPDATE_SIGN_UP_STATUS', signUp_firstStep, signUp_secondStep
    })),
    updateActiveUser: (authenticated, activeUser) => dispatch({
      type: 'UPDATE_ACTIVE_USER', authenticated, activeUser
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);