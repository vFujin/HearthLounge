import React, { Component } from 'react';
import {Sidebar} from './picked-class/left-container/sidebar';
import {Topbar} from './picked-class/right-container/topbar';
import {Card} from './picked-class/right-container/card-selection/card';
export class ArenaPickerClassSelected extends Component {

  render() {
    return (
        <div>
          <div className="container__page--left">
            <Sidebar/>
          </div>
          <div className="container__page--right">
            <Topbar/>
            <div className="content">
            <ul className="card-selection">
              <Card placeholder="pierwszej" />
              <Card placeholder="drugiej" />
              <Card placeholder="trzeciej" />
            </ul>
            </div>
          </div>

        </div>
    );
  }
}