import React, { Component } from 'react';
import {Sidebar} from './picked-class/left-container/sidebar';
import {Topbar} from './picked-class/right-container/topbar';
import {Card} from './picked-class/right-container/card-selection/card';
export class ArenaPickerClassSelected extends Component {

  render() {
    return (
        <div className={`choosen-class-view`}>
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar/>
            <ul className="card-selection">
              <Card placeholder="pierwszej" />
              <Card placeholder="drugiej" />
              <Card placeholder="trzeciej" />
            </ul>
          </div>

        </div>
    );
  }
}