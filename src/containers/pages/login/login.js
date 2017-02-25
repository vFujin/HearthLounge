import React, { Component } from 'react';
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

                <div className="button-wrapper">
                  <button>Submit</button>
                </div>
                {/*place for captcha*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}