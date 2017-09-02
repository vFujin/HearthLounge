import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import _ from 'lodash';
import {Link} from 'react-router';
import {LeftContainer} from './left-container/left-container';
import {createUser} from '../../../firebase/user/create';
import {updateUsername} from '../../../firebase/user/update';
import {getUsername} from '../../../firebase/user/read';
import inputVal from "./right-container/utils/input-val";
import {resetPassword} from "../../../firebase/user/utils/reset-password";
import {FIREBASE_SIGN_IN_REQUEST} from "../../../redux/types/firebase";

const findUsername = _.debounce((input, updateUsernameExistStatus) => {
  getUsername(input, (value) => updateUsernameExistStatus(value))
}, 500);

class Entry extends PureComponent {
  constructor(props){
    super(props)
    //debounce here
  }

  componentWillMount(){
    const {location, activeUser} = this.props;
    if(location.pathname === '/sign-up/update-profile' && !activeUser){
      browserHistory.push('/sign-up');
    }
  }

  componentDidMount() {
    const {location, signUp_firstStep, updateSignUpStatus, activeUser, toggleResetPasswordView, resetPasswordView} = this.props;
    if (location.pathname === '/sign-up/update-profile' && signUp_firstStep !== "succes" && activeUser) {
      updateSignUpStatus("success", "")
    }
    if(location.pathname === '/sign-in/reset-password' && !resetPasswordView){
      toggleResetPasswordView(!resetPasswordView);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.activeUser);
    // if(nextProps.activeUser){
    //     browserHistory.push('/dashboard')
    // }
  }

  componentWillUnmount(){
    const {updateFormProperty, toggleResetPasswordView} = this.props;
    updateFormProperty({
      signIn_password: "",
      signUp_firstStep: "",
      signUp_secondStep: "",
      signUp_confirmEmail: "",
      signUp_password: "",
      signUp_confirmPassword: "",
    });
    toggleResetPasswordView(false)
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
    const {signIn_email, updateSignInStatus} = this.props;
    updateSignInStatus({email: signIn_email, pass: inputVal('signIn_password')});
  };

  handleResetPassword = (e) =>{
    e.preventDefault();
    const {resetPass_email} = this.props;
    resetPassword(resetPass_email);
  };

  toggleResetPasswordViewClick = () =>{
    const {toggleResetPasswordView, resetPasswordView} = this.props;
    toggleResetPasswordView(!resetPasswordView)
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
                toggleResetPasswordViewClick: this.toggleResetPasswordViewClick,
                handleInputChange: this.handleInputChange,
                handleFormSubmit: this.handleFormSubmit,
                handleResetPassword: this.handleResetPassword,
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
  const {signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signUp_avatar, signUp_firstStep, signUp_secondStep, usernameFree, resetPass_email, resetPasswordView} = state.entry;
  return {signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signUp_avatar, signUp_firstStep, signUp_secondStep, usernameFree, resetPass_email, resetPasswordView};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormProperty: (props) => (dispatch({
      type: 'EDIT_FORM_PROPERTY', props
    })),
    toggleResetPasswordView: (resetPasswordView) => dispatch({
      type: 'TOGGLE_RESET_PASSWORD_VIEW', resetPasswordView
    }),
    updateSignUpStatus: (signUp_firstStep, signUp_secondStep) => (dispatch({
      type: 'UPDATE_SIGN_UP_STATUS', signUp_firstStep, signUp_secondStep
    })),
    updateUsernameExistStatus: (usernameFree) => (dispatch({
      type: 'UPDATE_USERNAME_EXIST_STATUS', usernameFree
    })),
    updateSignInStatus: (payload) => dispatch({
      type: FIREBASE_SIGN_IN_REQUEST, payload
    }),
    updateActiveUser: (authenticated, activeUser) => dispatch({
      type: 'UPDATE_ACTIVE_USER', authenticated, activeUser
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);