import React, { Component } from 'react';
import {Sidebar} from '../../left-container/sidebar';
import {Topbar} from '../topbar';
import {Card} from './card';
export class ChoosenClassView extends Component {

  render() {
    return (
        <div className={`${this.props.display} choosen-class-view`}>
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar/>
              <Card cards={this.props.cards}/>
          </div>

        </div>
    );
  }
}