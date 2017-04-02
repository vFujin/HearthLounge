import React, { Component } from 'react';
import {Link} from 'react-router';
import Input from '../../shared-assets/form-assets/input';

export class SignUp extends Component {

  input(id, label, placeholder, type, pattern){
    return (
        <Input id={id}
               label={label}
               placeholder={placeholder}
               type={type}

               value={this.props[id]}
               tooltip={this.props[`${id}_tooltip`]}
               handleInputChange={this.props.handleInputChange}
               hideTooltip={this.props.hideTooltip}
               showTooltip={this.props.showTooltip} />
    )
  }

  render() {
    let username = "username",
        email = "e-mail",
        password = "password",
        secret_answer = "secret_answer",
        text = "text",
        username_pattern = /^[A-Za-z]{3,10}$/;
    return (
      <div className="sign sign-up active">
        <form onSubmit={(e)=>this.props.handleFormSubmit(e, this.props[email], this.props[password])}>
          {/*            id                     label                      placeholder        type          pattern    */}
          {this.input(username,               username,               "Joe",                  text,     null)}
          {this.input(email,                  email,                  "example@example.com",  email, "")}
          {this.input(`confirm_${email}`,     `Confirm ${email}`,     "example@example.com",  email, "")}
          {this.input(password,               password,               "",                     password, "")}
          {this.input(`confirm_${password}`,  `Confirm ${password}`,  "",                     password, "")}

          <div className="input-wrapper">
            <label htmlFor="secret_question">Choose secret question:</label>
            <select id="secret_question">
              <option>What was your childhood nickname?</option>
              <option>In what city did you meet your spouse/significant other?</option>
              <option>What is the name of your favorite childhood friend?</option>
              <option>In what city or town did your mother and father meet?</option>
            </select>
          </div>

          {this.input(secret_answer, `Secret answer`, "", text, "")}

          <div className="input-wrapper">
            <div className="tos">
              <input onClick={this.props.handleCheckboxClick} id="tos" type="checkbox"/>
              <label htmlFor="tos">I agree to the <Link to="terms-of-service">terms of service</Link></label>
            </div>
          </div>
          {/*place for captcha*/}

          <div className="button-wrapper">
            <button className="btn-pearl">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
