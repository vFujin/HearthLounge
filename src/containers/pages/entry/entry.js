import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {LeftContainer} from './left-container';
import {createUser} from '../../../firebase/user/create';
import {updateUsername} from '../../../firebase/user/update';
import {getUsername} from '../../../firebase/user/read';
import {signIn} from '../../../firebase/user/utils';
import _ from 'lodash';

const findUsername = _.debounce((input, updateUsernameExistStatus) => {
  getUsername(input, (value) => updateUsernameExistStatus(value))
}, 500);

const Entry = ({usernameFree, updateUsernameExistStatus, updateActiveUser, location, activeUser, authenticated, children, signUp_username,
                 signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, signUp_profilePic, tos, signIn_email, signIn_password,
                 signUp_firstStep, signUp_secondStep, updateFormProperty, updateSignUpStatus}) =>{

  // if(location.pathname === '/sign-up/update-profile'){
  //   updateSignUpStatus("success", "");
  // }

  const handleInputChange = (e) =>{
    let target = e.target;
    let id = target.id;
    let value = target.value;
    updateFormProperty({[id]: value});
    if(id === "signUp_username"){
      findUsername(value, updateUsernameExistStatus);
    }
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    createUser(signUp_email, signUp_password, updateSignUpStatus, updateActiveUser);
  };

  const handleUpdateProfileFormSubmit = (e) => {
    e.preventDefault();
    updateUsername(activeUser, signUp_username, updateSignUpStatus)
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(signIn_email, signIn_password);
  };

  const handleCheckboxClick = (e) => {
    let target = e.target;
    let checked = target.checked;
    updateFormProperty({tos: checked})
  };

  return (
    <div className={`container__page container__page--oneSided entry`}>
      <div className="wrapper">
        <LeftContainer/>
        <div className="breakline v-breakline"></div>
        <div className="container__page--inner container__page--right">
          <div className="topbar">
            <Link to="/sign-in" activeClassName="active">
              <p>Sign In</p>
            </Link>
            <Link to={authenticated ? '/dashboard' : '/sign-up'} activeClassName="active">
              <p>Sign Up</p>
            </Link>
          </div>
          {React.cloneElement(children, {
            //sign up phase 1
            signUp_email,
            signUp_confirmEmail,
            signUp_password,
            signUp_confirmPassword,
            signUp_firstStep,
            signUp_secondStep,
            tos,

            //sign up phase 2
            activeUser,
            signUp_username,
            usernameFree,
            signUp_profilePic,

            //sign in
            signIn_email,
            signIn_password,

            updateFormProperty,

            handleInputChange,
            handleCheckboxClick,
            handleSignIn,
            handleFormSubmit,
            handleUpdateProfileFormSubmit
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  const {signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signIn_password, signUp_profilePic, signUp_firstStep, signUp_secondStep, usernameFree} = state.entry;
  return {signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signIn_password, signUp_profilePic, signUp_firstStep, signUp_secondStep, usernameFree};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormProperty: (props) => (dispatch({
      type: 'EDIT_FORM_PROPERTY', props
    })),
    updateSignUpStatus: (signUp_firstStep, signUp_secondStep) => (dispatch({
      type: 'UPDATE_SIGN_UP_STATUS', signUp_firstStep, signUp_secondStep
    })),
    updateUsernameExistStatus: (usernameFree) => (dispatch({
      type: 'UPDATE_USERNAME_EXIST_STATUS', usernameFree
    })),
    updateActiveUser: (authenticated, activeUser) => dispatch({
      type: 'UPDATE_ACTIVE_USER', authenticated, activeUser
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);

Entry.propTypes = {
  signIn_email: PropTypes.string,
  signIn_password: PropTypes.string,
  signUp_username: PropTypes.string,
  signUp_email: PropTypes.string,
  signUp_confirmEmail: PropTypes.string,
  signUp_password: PropTypes.string,
  signUp_confirmPassword: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleSignIn: PropTypes.func,
  handleCheckboxClick: PropTypes.func,
  updateFormProperty: PropTypes.func
};