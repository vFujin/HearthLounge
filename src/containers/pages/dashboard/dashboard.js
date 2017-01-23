import React, {Component} from 'react';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar'
export class Dashboard extends Component {
  render(){
    return (
        <div className="pageContainer dashboard">
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar/>
          </div>
        </div>
    )
  }
}