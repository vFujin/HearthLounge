import React, { Component } from 'react';
import {Link} from 'react-router';
export class Login extends Component {
  render() {
    console.log(this.props.location.pathname);
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
              <Link to="sign-in" activeClassName="active">
                <p>Sign In</p>
              </Link>
              <Link to="sign-up" activeClassName="active">
                <p className="active">Sign Up</p>
              </Link>
            </div>
            <div className="breakline h-breakline"></div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}