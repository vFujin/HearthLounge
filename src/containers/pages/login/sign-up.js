import React, { Component } from 'react';
import {Link} from 'react-router';
export class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      email: "",
      confirm_email: "",
      password: "",
      confirm_password: "",
      secret_question: "",
      secret_answer: "",
      tos: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  compareInputValues(input, confirm_input){

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

  render() {
    return (
      <div className="sign sign-up active">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="username">Username:</label>
          <input onChange={this.handleInputChange} type="text" id="username" placeholder="xJoex"/>

          <label htmlFor="email">E-mail:</label>
          <input onChange={this.handleInputChange} type="email" id="email" placeholder="example@example.com"/>

          <label htmlFor="email_confirm">Confirm e-mail:</label>
          <input onChange={this.handleInputChange} type="email" id="email_confirm" placeholder="example@example.com"/>

          <label htmlFor="password">Password:</label>
          <input onChange={this.handleInputChange} type="password" id="password"/>

          <label htmlFor="password_confirm">Confirm password:</label>
          <input onChange={this.handleInputChange} type="password" id="confirm_password"/>

          <label htmlFor="secret_question">Choose secret question:</label>
          <select id="secret_question">
            <option>What was your childhood nickname?</option>
            <option>In what city did you meet your spouse/significant other?</option>
            <option>What is the name of your favorite childhood friend?</option>
            <option>In what city or town did your mother and father meet?</option>
          </select>

          <label htmlFor="secret_answer">Secret answer:</label>
          <input onChange={this.handleInputChange} type="text" id="secret_answer"/>

          <div className="tos">
            <input onClick={this.handleCheckboxClick} id="tos" type="checkbox"/>
            <label htmlFor="tos">I agree to the <Link to="terms-of-service">terms of service</Link></label>
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