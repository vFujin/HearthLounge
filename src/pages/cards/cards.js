import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';

export class Cards extends Component {
  render() {
    return (
        <div className="pageContainer cards">
          <Sidebar/>
          <Topbar/>
        </div>
    );
  }
}