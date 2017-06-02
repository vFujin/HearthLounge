import React from 'react';
import {Link} from 'react-router';
import {LeftContainer} from './left-container';
import {browserHistory} from 'react-router';
import {createUser, signIn} from '../../../server/auth'
import {events} from "../../shared-assets/form-assets/form-events-data";
import {connect} from 'react-redux';
import SignIn from './sign-in';
import SignUp from './sign-up';

const Entry = ({children, location, signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signIn_password, error_tooltip, updateFormProperty}) =>{
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     //Sign up
  //     signUp_username: "",
  //     signUp_email: "",
  //     signUp_confirmEmail: "",
  //     signUp_password: "",
  //     signUp_confirmPassword: "",
  //     tos: false,
  //
  //     //Sign in
  //     signIn_email: "",
  //     signIn_password: "",
  //
  //     error_tooltip: null
  //   };
  //
  //   events.handleSignIn = events.handleSignIn.bind(this);
  //   events.handleCheckboxClick = events.handleCheckboxClick.bind(this, 'tos');
  // }
  //
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.authed){
  //     browserHistory.push('/dashboard')
  //   }
  // }

  const handleInputChange = (e) =>{
    const target = e.target;
    const value = e.target.value;
    const id = target.id;
    updateFormProperty({[id]: value});
  };

  const handleFormSubmit = (e, email, pass, username) =>{
    e.preventDefault();
    // createUser(email, pass, username, (v)=>this.setState({
    //   error_tooltip: v
    // }));
  };

  const checkUrl = () => {
    if(location.pathname === "/sign-in"){
      return <SignIn />
    }
    return <SignUp />
    // {React.cloneElement((this.props.children), {
    //   signUp_username: this.state.signUp_username,
    //   signUp_email: this.state.signUp_email,
    //   signUp_confirmEmail: this.state.signUp_confirmEmail,
    //   signUp_password: this.state.signUp_password,
    //   signUp_confirmPassword: this.state.signUp_confirmPassword,
    //   tos: this.state.tos,
    //
    //   signIn_email: this.state.signIn_email,
    //   signIn_password: this.state.signIn_password,
    //   error_tooltip: this.state.error_tooltip,
    //
    //   handleSignIn: events.handleSignIn,
    //   handleInputChange: handleInputChange,
    //   handleCheckboxClick: events.handleCheckboxClick,
    //   handleFormSubmit: (e)=>this.handleFormSubmit(e, this.state.signUp_email, this.state.signUp_password, this.state.signUp_username)
    // })}
  };

    return (
      <div className={`container__page container__page--oneSided login`}>
        <div className="wrapper">
          <LeftContainer/>
          <div className="breakline v-breakline"></div>
          <div className="container__page--inner container__page--right">
            <div className="topbar">
              <Link to="sign-in" activeClassName="active">
                <p>Sign In</p>
              </Link>
              <Link to="sign-up" activeClassName="active">
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
              error_tooltip,
              handleInputChange
            })}
          </div>
        </div>
      </div>
    );
};

const mapStateToProps = (state) =>{
  const {signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signIn_password, error_tooltip} = state.entry;
  return {signUp_username, signUp_email, signUp_confirmEmail, signUp_password, signUp_confirmPassword, tos, signIn_email, signIn_password, error_tooltip};
};



const mapDispatchToProps = (dispatch) => {
  return {
    updateFormProperty: (props) => (dispatch({
      type: 'EDIT_FORM_PROPERTY', props
    }))

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);