import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router';
import {LeftContainer} from './left-container/left-container';
import {createUser} from '../../../firebase/user/create';
import {updateUsername} from '../../../firebase/user/update';
import {getUsername} from '../../../firebase/user/read';
import {signIn} from '../../../firebase/user/utils';

const findUsername = _.debounce((input, updateUsernameExistStatus) => {
  getUsername(input, (value) => updateUsernameExistStatus(value))
}, 500);

class Entry extends PureComponent {
  constructor(props){
    super(props)

    //debounce here
  }

  componentDidMount() {
    const {location, signUp_firstStep, updateSignUpStatus} = this.props;
    if (location.pathname === '/sign-up/update-profile' && signUp_firstStep !== "succes") {
      updateSignUpStatus("success", "")
    }
  }

  componentWillUnmount(){
    const {updateFormProperty} = this.props;
    updateFormProperty({
      signIn_password: "",
      signUp_firstStep: "",
      signUp_secondStep: "",
      signUp_confirmEmail: "",
      signUp_password: "",
      signUp_confirmPassword: ""
    })
  }

   handleInputChange = (e) => {
    const {updateFormProperty, updateUsernameExistStatus} = this.props;
    let target = e.target;
    let id = target.id;
    let value = target.value;
    updateFormProperty({[id]: value});
    if (id === "signUp_username") {
      findUsername(value, updateUsernameExistStatus);
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {signUp_email, signUp_password, updateSignUpStatus, updateActiveUser} = this.props;
    createUser(signUp_email, signUp_password, updateSignUpStatus, updateActiveUser);
  };

  handleUpdateProfileFormSubmit = (e) => {
    e.preventDefault();
    const {activeUser, signUp_username, updateSignUpStatus} = this.props;
    updateUsername(activeUser, signUp_username, updateSignUpStatus)
  };

  handleSignIn = (e) => {
    e.preventDefault();
    const {signIn_email, signIn_password} = this.props;
    signIn(signIn_email, signIn_password);
  };

  handleCheckboxClick = (e) => {
    const {updateFormProperty} = this.props;
    let target = e.target;
    let checked = target.checked;
    updateFormProperty({tos: checked})
  };

  render() {
    const {children} = this.props;

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
                <Link to="/sign-up" activeClassName="active">
                  <p>Sign Up</p>
                </Link>
              </div>
              {React.cloneElement(children, {
                ...this.props,
                handleInputChange: this.handleInputChange,
                handleFormSubmit: this.handleFormSubmit,
                handleUpdateProfileFormSubmit: this.handleUpdateProfileFormSubmit,
                handleSignIn: this.handleSignIn,
                handleCheckboxClick: this.handleCheckboxClick
              })}
            </div>
          </div>
        </div>
    );
  }
}

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