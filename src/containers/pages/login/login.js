import React, { Component } from 'react';
import {Link} from 'react-router';
import {LeftContainer} from './left-container';
import {browserHistory} from 'react-router';

import {events} from "../../shared-assets/form-assets/form-events-data";
export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      //Sign up
      signUp_username: "",
      signUp_email: "",
      signUp_confirmEmail: "",
      signUp_password: "",
      signUp_confirmPassword: "",
      tos: false,

      //Sign in
      signIn_email: "",
      signIn_password: ""
    };

    events.handleSignIn = events.handleSignIn.bind(this);
    events.handleCheckboxClick = events.handleCheckboxClick.bind(this, 'tos');
    events.handleFormSubmit = events.handleFormSubmit.bind(this);
  }

  componentWillMount(){
    console.log("foo")
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.authed){
      browserHistory.push('/dashboard')
    }
  }
  foo (e){
    const target = e.target;
    const value = e.target.value;
    const id = target.id;
    return this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div className={`container__page container__page--oneSided login`}>
        <div className="wrapper">
          <LeftContainer/>
          <div className="right-container">
            <div className="breakline-wrapper">
              <div className="breakline v-breakline"></div>
            </div>
            <div className="topbar">
              <Link to="sign-in" activeClassName="active">
                <p>Sign In</p>
              </Link>
              <Link to="sign-up" activeClassName="active">
                <p>Sign Up</p>
              </Link>
            </div>
            <div className="breakline h-breakline"></div>
            {React.cloneElement((this.props.children), {
              signUp_username: this.state.signUp_username,
              signUp_email: this.state.signUp_email,
              signUp_confirmEmail: this.state.signUp_confirmEmail,
              signUp_password: this.state.signUp_password,
              signUp_confirmPassword: this.state.signUp_confirmPassword,
              tos: this.state.tos,

              // sessionStorage, localStorage JSON.stringify

              signIn_email: this.state.signIn_email,
              signIn_password: this.state.signIn_password,
              handleSignIn: events.handleSignIn,

              handleInputChange: this.foo.bind(this),
              handleCheckboxClick: events.handleCheckboxClick,
              handleFormSubmit: events.handleFormSubmit
            })}
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {

};