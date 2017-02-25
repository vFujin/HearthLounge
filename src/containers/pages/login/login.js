import React, { Component } from 'react';
export class Login extends Component {
  render() {
    return (
        <div className="sign">
          <div className="left-container"></div>
          <div className="right-container">
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username"/>

              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email"/>

              <label htmlFor="email_confirm">Confirm e-mail:</label>
              <input type="email" id="email_confirm"/>

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
              
              {/*place for captcha*/}
            </form>
          </div>
        </div>
    );
  }
}