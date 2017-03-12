import React, { Component } from 'react';
export class SignIn extends Component {
  render() {
    return (
      <div className="sign sign-in">
        <form>
          <div className="input-wrapper">
            <label htmlFor="username-email">Username or E-mail:</label>
            <input type="text" id="username-email"/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password"/>
          </div>

          <div className="button-wrapper">
            <button className="btn-pearl">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}