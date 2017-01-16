import React, { Component } from 'react';
import {Sidebar} from '../left-container/sidebar';
import {Topbar} from './topbar';
import {Card} from './card-selection/card';
export class PickedClass extends Component {

  render() {
    return (
        <div className={`${this.props.display} choosen-class-view`}>
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