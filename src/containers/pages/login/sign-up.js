import React, { Component } from 'react';
import {Link} from 'react-router';
export class SignUp extends Component {
  render() {
    return (
      <div className="sign sign-up active">
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="xJoex"/>

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="example@example.com"/>

          <label htmlFor="email_confirm">Confirm e-mail:</label>
          <input type="email" id="email_confirm" placeholder="example@example.com"/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password"/>

          <label htmlFor="password_confirm">Confirm password:</label>
          <input type="password" id="confirm_password"/>

          <label htmlFor="secret_question">Choose secret question:</label>
          <select id="secret_question">
            <option>What was your childhood nickname?</option>
            <option>In what city did you meet your spouse/significant other?</option>
            <option>What is the name of your favorite childhood friend?</option>
            <option>In what city or town did your mother and father meet?</option>
          </select>

          <label htmlFor="secret_answer">Secret answer:</label>
          <input type="text" id="secret_answer"/>

          <div className="tos">
            <input id="tos" type="checkbox"/>
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