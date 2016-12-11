import React, { Component } from 'react';
import {Sidebar} from './picked-class/sidebar';
import {Topbar} from './picked-class/topbar';
export class PickedClass extends Component {
  render() {
    return (
        <div>
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
        </div>
    );
  }
}