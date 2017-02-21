import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';

export class Expansions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="pageContainer expansions">
          <div className="left-container">
            <Sidebar expansion={this.props.location.pathname.split('/')[2]}/>
          </div>
          <div className="right-container">
            {this.props.children}
            </div>
          </div>
    );
  }
}