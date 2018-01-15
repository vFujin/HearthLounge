import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import Input from '../../../../../../components/inputs/input';
import Button from "../../../../../../components/buttons/button";
import {createUser} from "../../../../../../firebase/user/create";
import {error} from "../../../../../../utils/messages";

class SignUpForm extends Component {

  componentDidMount(){
    document.title = "Sign Up";
  }

  componentWillUnmount(){
    this.props.updateFormProperty({
      signUp_password: "",
      signUp_confirmPassword: ""
    })
  }

  handleCheckboxClick = (e) => {
    const {updateFormProperty} = this.props;
    let target = e.target;
    let checked = target.checked;
    updateFormProperty({tos: checked});
  };

  validate = () =>{
    const {entry, updateSignUpStatus, updateActiveUser} = this.props;
    const {signUp_email, signUp_password, signUp_confirmEmail, signUp_confirmPassword, tos} = entry;

    if(!_.isEmpty(signUp_email) && signUp_password.length >= 8 && tos) {
      createUser(signUp_email, signUp_password, updateSignUpStatus, updateActiveUser);
    } else {
      if(_.isEmpty(signUp_email) || _.isEmpty(signUp_password)) {
        error("Email and password can't be empty")
      }
      if(signUp_email !== signUp_confirmEmail){
        error("Email and Confirm Email must match")
      }
      if(signUp_password !== signUp_confirmPassword){
        error("Password and Confirm Password must match")
      }
      if(!tos){
        error("You have to agree to Terms of Service");
      }
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.validate();
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
               siblingValue={signUp_confirmEmail}
               value={signUp_email}/>

        <Input id="signUp_confirmEmail"
               type="email"
               placeholder="hearth@lounge.com"
               handleInputChange={handleInputChange}
               siblingValue={signUp_email}
               value={signUp_confirmEmail}/>

        <Input id="signUp_password"
               type="password"
               handleInputChange={handleInputChange}
               siblingValue={signUp_confirmPassword}
               value={signUp_password}/>

        <Input id="signUp_confirmPassword"
               type="password"
               handleInputChange={handleInputChange}
               siblingValue={signUp_password}
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