import React, { Component } from 'react';
export class SignIn extends Component {
  render() {
    return (
      <div className="sign sign-in">
        <form>
          <div className="input-wrapper">
            <label htmlFor="username-email">Username or E-mail:</label>
            <input id="sign_in-e-mail" onChange={(e)=>this.props.handleInputChange(e)} value={this.props['sign_in-e-mail']} type="text"/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input id="sign_in-password" onChange={(e)=>this.props.handleInputChange(e)} value={this.props['sign_in-password']} type="password" />
          </div>

          <div className="button-wrapper">
            <button onClick={(e)=>this.props.handleSignIn(e, this.props['sign_in-e-mail'], this.props['sign_in-password'])} className="btn-pearl">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}