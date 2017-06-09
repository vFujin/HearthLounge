import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {LeftContainer} from './left-container';
import {createUser, saveUser, signIn} from '../../../server/auth'
import PropTypes from 'prop-types';

const Entry = ({children, signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signIn_password, updateFormProperty}) =>{

  const handleInputChange = (e) =>{
    let target = e.target;
    let id = target.id;
    let value = target.value;
    updateFormProperty({[id]: value});
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    createUser(signUp_email, signUp_password, signUp_username);
  };

  const handleUpdateProfileFormSubmit = (e, activeUser) => {
    e.preventDefault();
    saveUser(activeUser, signUp_username)
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
      <div className={`container__page container__page--oneSided login`}>
        <div className="wrapper">
          <LeftContainer/>
          <div className="breakline v-breakline"></div>
          <div className="container__page--inner container__page--right">
            <div className="topbar">
              <Link to="/sign-in" activeClassName="active">
                <p>Sign In</p>
              </Link>
              <Link to="/sign-up" activeClassName="active">
                <p>Sign Up</p>
              </Link>
            </div>
            {React.cloneElement(children, {
              signUp_username,
              signUp_email,
              signUp_confirmEmail,
              signUp_password,
              signUp_confirmPassword,
              tos,

              signIn_email,
              signIn_password,

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
  const {signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signIn_password} = state.entry;
  return {signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signIn_password};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormProperty: (props) => (dispatch({
      type: 'EDIT_FORM_PROPERTY', props
    }))

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