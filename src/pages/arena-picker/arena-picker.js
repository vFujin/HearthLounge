import React, { Component } from 'react';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
export class ArenaPicker extends Component {
  render() {
    return (
        <div className="pageContainer arena-picker">
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar/>
          </div>

        </div>
    );
  }
}