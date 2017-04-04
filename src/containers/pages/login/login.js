import React, { Component } from 'react';
import {Link} from 'react-router';
import {LeftContainer} from './left-container';

import {events} from "../../shared-assets/form-assets/form-events-data";
export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      //Sign up
      username: "",
      'e-mail': "",
      'confirm_e-mail': "",
      password: "",
      confirm_password: "",
      secret_question: "",
      secret_answer: "",
      tos: false,

      //Sign in
      'sign_in-e-mail': "",
      'sign_in-password': ""
    };

    events.handleSignIn = events.handleSignIn.bind(this);
    events.handleInputChange = events.handleInputChange.bind(this);
    events.handleCheckboxClick = events.handleCheckboxClick.bind(this, 'tos');
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    events.handleFormSubmit = events.handleFormSubmit.bind(this);
  }

  foo (e){
    const target = e.target;
    const value = e.target.value;
    const id = target.id;
    return this.setState({
      [id]: value
    });
  }

  // componentWillMount(){
  //   if(this.props.authed === true){
  //     browserHistory.push('/dashboard');
  //   }
  // }

  componentWillUnmount(){
    // console.log(this.state);
    this.setState({
      //Sign up
      username: "",
      'e-mail': "",
      'confirm_e-mail': "",
      password: "",
      confirm_password: "",
      secret_question: "",
      secret_answer: "",
      tos: false,

      //Sign in
      'sign_in-e-mail': "",
      'sign_in-password': ""
    });
  }

  showTooltip(e){
    let target = e.target.id;
    this.setState({
      [`${target}_tooltip`]: true
    });
  }

  hideTooltip(e){
    let target = e.target.id;
    this.setState({
      [`${target}_tooltip`]: false
    })
  }

  render() {
    console.log(this.state);
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
                <p className="active">Sign Up</p>
              </Link>
            </div>
            <div className="breakline h-breakline"></div>
            {React.cloneElement((this.props.children), {
              //Sign Up
              username: this.state.username,
              'e-mail': this.state['e-mail'],
              'confirm_e-mail': this.state['confirm_e-mail'],
              password: this.state.password,
              confirm_password: this.state.confirm_password,
              secret_question: this.state.secret_question,
              secret_answer: this.state.secret_answer,
              tos: this.state.tos,
              // [`${id}_tooltip`]: this.state[`${id}_tooltip`]
              username_tooltip: this.state.username_tooltip,
              password_tooltip: this.state.password_tooltip,
              confirm_password_tooltip: this.state.confirm_password_tooltip,
              'e-mail_tooltip': this.state['e-mail_tooltip'],
              'confirm_e-mail_tooltip': this.state['confirm_e-mail_tooltip'],
              secret_answer_tooltip: this.state.secret_answer_tooltip,


              handleInputChange: this.foo.bind(this),
              handleCheckboxClick: events.handleCheckboxClick,
              hideTooltip: this.hideTooltip,
              showTooltip: this.showTooltip,
              handleFormSubmit: events.handleFormSubmit,

              // sessionStorage, localStorage JSON.stringify

              //Sign In
              'sign_in-e-mail': this.state['sign_in-e-mail'],
              'sign_in-password': this.state['sign_in-password'],
              handleSignIn: events.handleSignIn
            })}
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  username: React.PropTypes.string,
  email: React.PropTypes.string,
  email_confirm: React.PropTypes.string,
  password: React.PropTypes.string,
  password_confirm: React.PropTypes.string,
  secret_question: React.PropTypes.string,
  secret_answer: React.PropTypes.string,
  tos: React.PropTypes.bool,
  handleInputChange: React.PropTypes.func,
  handleCheckboxClick: React.PropTypes.func,
  hideTooltip: React.PropTypes.func,
  showTooltip: React.PropTypes.func,
  handleFormSubmit: React.PropTypes.func,
  handleSignIn: React.PropTypes.func
};