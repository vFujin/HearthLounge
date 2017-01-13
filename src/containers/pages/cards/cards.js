import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import {ServiceCards} from './service.cards';

export class Cards extends Component {
  constructor(props){
    super(props);

    this.state = {

    }

  }
  render() {
    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar/>
            </div>
            <div className="right-container">
                <Topbar/>
                <ServiceCards/>
            </div>
        </div>
    );
  }
}