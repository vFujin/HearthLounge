import React, { Component } from 'react';
import {Sidebar} from './picked-class/sidebar';
import {Topbar} from './picked-class/topbar';
import * as browserHistory from "react-router";
export class PickedClass extends Component {

  render() {
    return (
        <div className={`${this.props.display} arena-picker-wrapper`}>
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar/>
            <ul>
              <li>x</li>
              <li>x</li>
              <li>x</li>
            </ul>
          </div>
          <button
              className="button icon-left"
              onClick={browserHistory.goBack}>
            Back
          </button>
        </div>
    );
  }
}