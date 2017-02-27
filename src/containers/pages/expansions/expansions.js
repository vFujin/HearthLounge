import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';

export class Expansions extends Component {
  render() {
    let expansionUrl = this.props.location.pathname;
    return (
    <div className="pageContainer expansions">
      <div className="left-container">
        <Sidebar expansion={expansionUrl}/>
      </div>
      <div className="right-container">
        {this.props.children}
        </div>
      </div>
    );
  }
}