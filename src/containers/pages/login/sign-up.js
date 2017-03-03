import React, { Component } from 'react';
import {Link} from 'react-router';
import {events} from '../../shared-assets/form-assets/form-events-data';
import Input from '../../shared-assets/form-assets/input';

export class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      email: "",
      email_confirm: "",
      password: "",
      password_confirm: "",
      secret_question: "",
      secret_answer: "",
      tos: false
    };

    events.handleInputChange = events.handleInputChange.bind(this);
    events.handleCheckboxClick = events.handleCheckboxClick.bind(this, 'tos');
    events.hideTooltip = events.hideTooltip.bind(this);
    events.showTooltip = events.showTooltip.bind(this);
  }

  input(id, label, placeholder, type, pattern){
    return (
        <Input id={id}
               label={label}
               placeholder={placeholder}
               type={type}
               pattern={pattern}
               tooltip={this.state[`${id}_tooltip`]}
               handleInputChange={events.handleInputChange}
               hideTooltip={events.hideTooltip}
               showTooltip={events.showTooltip} />
    )
  }

  render() {
    let username = "username",
        email = "e-mail",
        password = "password",
        secret = "secret",
        text = "text";
    let username_pattern = /^[A-Za-z]{3,10}$/;
    return (
      <div className="sign sign-up active">
        <form onSubmit={events.handleFormSubmit}>
          {/*            id                     label                      placeholder        type          pattern    */}
          {this.input(username,               username,               "Joe",                  text,     username_pattern)}
          {this.input(email,                  email,                  "example@example.com",  email)}
          {this.input(`confirm_${email}`,     `Confirm ${email}`,     "example@example.com",  email)}
          {this.input(password,               password,               "",                     password)}
          {this.input(`confirm_${password}`,  `Confirm ${password}`,  "",                     password)}

          <div className="input-wrapper">
            <label htmlFor="secret_question">Choose secret question:</label>
            <select id="secret_question">
              <option>What was your childhood nickname?</option>
              <option>In what city did you meet your spouse/significant other?</option>
              <option>What is the name of your favorite childhood friend?</option>
              <option>In what city or town did your mother and father meet?</option>
            </select>
          </div>

          {this.input(secret, `${secret} answer`, "", text)}

          <div className="input-wrapper">
            <div className="tos">
              <input onClick={events.handleCheckboxClick} id="tos" type="checkbox"/>
              <label htmlFor="tos">I agree to the <Link to="terms-of-service">terms of service</Link></label>
            </div>
          </div>
          {/*place for captcha*/}

          <div className="button-wrapper">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
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