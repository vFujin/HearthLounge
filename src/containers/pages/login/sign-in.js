import React, { Component } from 'react';
export class SignIn extends Component {
  render() {
    return (
      <div className="sign sign-in didplayNone">
        <form>
          <label htmlFor="username-email">Username or E-mail:</label>
          <input type="text" id="username-email"/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password"/>
        </form>
      </div>
    );
  }
}