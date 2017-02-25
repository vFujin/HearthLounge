import React, { Component } from 'react';
import {Link} from 'react-router';
import {Carousel} from './carousel';
export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      active_dot: 1
    }
  }
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
            <Carousel/>
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