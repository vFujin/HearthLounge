import React, { Component } from 'react';
import {Link} from 'react-router';
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  compareInputValues(input, confirm_input){

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

  handleInputChange(e){
    const target = e.target;
    const value = e.target.value;
    const id = target.id;

    this.setState({
      [id]: value
    });
  }

  handleCheckboxClick(){
    let check = this.state.tos === false ? true : false;
    this.setState({
      tos: check
    })
  }

  handleFormSubmit = formSubmitEvent =>{
    formSubmitEvent.preventDefault();
  };

  input(id, label, placeholder, type){
    return (
        <Input id={id}
               label={label}
               placeholder={placeholder}
               type={type}
               tooltip={this.state[`${id}_tooltip`]}
               handleInputChange={this.handleInputChange}
               hideTooltip={this.hideTooltip}
               showTooltip={this.showTooltip} />
    )
  }

  render() {
    let username = "username",
        email = "e-mail",
        password = "password",
        secret = "secret",
        text = "text";

    return (
      <div className="sign sign-up active">
        <form onSubmit={this.handleFormSubmit}>
          {this.input(username,               username,               "Joe",                  text)}
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

          {this.input(secret,                `${secret} answer`,       "",                     text)}

          <div className="input-wrapper">
            <div className="tos">
              <input onClick={this.handleCheckboxClick} id="tos" type="checkbox"/>
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