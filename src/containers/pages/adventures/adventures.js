import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';

export class Adventures extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar adventure={this.props.location.pathname.split('/')[2]}/>
          </div>
          <div className='right-container'>
            <div className={`content`}>
              {this.props.children}
            </div>
          </div>



        </div>
    );
  }
}