import React, { Component } from 'react';
import {Link} from 'react-router';
import {Carousel} from './carousel';
import {carousel} from './data';
import {events} from "../../shared-assets/form-assets/form-events-data";
export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      current_dot: 0,

      //Sign up
      username: "",
      ['e-mail']: "",
      ['confirm_e-mail']: "",
      password: "",
      confirm_password: "",
      secret_question: "",
      secret_answer: "",
      tos: false
    };

    events.handleInputChange = events.handleInputChange.bind(this);
    events.handleCheckboxClick = events.handleCheckboxClick.bind(this, 'tos');
    events.hideTooltip = events.hideTooltip.bind(this);
    events.showTooltip = events.showTooltip.bind(this);
    events.handleFormSubmit = events.handleFormSubmit.bind(this);
  }

  handleCurrentDotChange(current_dot){
    this.setState({
      current_dot: current_dot
    })
  }

  dots(){
    return (
      <ul>
        {carousel.map((active,index)=>
          <li key={index} className={this.state.current_dot === index ? 'active' : index}>{active.dot}</li>
        )}
      </ul>
    )
  }

  render() {
    return (
      <div className="pageContainer login">
        <div className="wrapper">
          <div className="left-container">
            <div className="topbar">
              {this.dots()}
            </div>
            <div className="breakline h-breakline"></div>
            <Carousel handleCurrentDotChange={this.handleCurrentDotChange.bind(this)} />
          </div>
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
            {React.cloneElement(this.props.children, {
              username: this.state.username,
              ['e-mail']: this.state['e-mail'],
              ['confirm_e-mail']: this.state['confirm_e-mail'],
              password: this.state.password,
              confirm_password: this.state.confirm_password,
              secret_question: this.state.secret_question,
              secret_answer: this.state.secret_answer,
              tos: this.state.tos,

              handleInputChange: events.handleInputChange,
              handleCheckboxClick: events.handleCheckboxClick,
              hideTooltip: events.hideTooltip,
              showTooltip: events.showTooltip,
              handleFormSubmit: events.handleFormSubmit,
            })
            }
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
};