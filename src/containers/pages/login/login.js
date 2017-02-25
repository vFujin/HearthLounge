import React, { Component } from 'react';
import {SignUp} from './sign-up';
export class Login extends Component {
  render() {
    return (
      <div className="pageContainer login">
        <div className="wrapper">
          <div className="left-container">
            <div className="topbar">
              <ul>
                <li className="active">◈</li>
                <li>◈</li>
                <li>◈</li>
              </ul>
            </div>
            <div className="breakline h-breakline"></div>
            <div className="soon-to-be-carousel">
              <div className="carousel-wrapper">
                <div>Create your own decks!</div>
                <span className="hs hs-icon icon-create-deck"></span>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="breakline-wrapper">
              <div className="breakline v-breakline"></div>
            </div>
            <div className="topbar">
              <p>Sign In</p>
              <p className="active">Sign Up</p>
            </div>
            <div className="breakline h-breakline"></div>
            {/*<div className="sign sign-in">*/}
              {/*<form>*/}
                {/*<label htmlFor="username-email">Username or E-mail:</label>*/}
                {/*<input type="text" id="username-email"/>*/}

                {/*<label htmlFor="password">Password:</label>*/}
                {/*<input type="password" id="password"/>*/}
              {/*</form>*/}

            {/*</div>*/}

            <SignUp/>
          </div>
        </div>
      </div>
    );
  }
}