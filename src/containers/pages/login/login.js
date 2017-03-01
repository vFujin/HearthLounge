import React, { Component } from 'react';
import {Link} from 'react-router';
import {Carousel} from './carousel';
import {carousel} from './data';
export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      current_dot: 0
    }
  }

  handleCurrentDotChange(current_dot){
    console.log(this.state.current_dot);
    this.setState({
      current_dot: current_dot
    })
  }

  dots(){
    return (
      <ul>
        {carousel.map((active,index)=>
          <li className={this.state.current_dot === index ? 'active' : index}>{active.dot}</li>
        )}
      </ul>
    )
  }


  render() {
    return (
      <div className="pageContainer login">
        <div className="wrapper">
          <div className="left-container">
            <div className="topbar">
              {this.dots()}
            </div>
            <div className="breakline h-breakline"></div>
            <Carousel handleCurrentDotChange={this.handleCurrentDotChange.bind(this)} />
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