import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';

export class Adventures extends Component {
   render() {
    let adventureUrl = this.props.params.adventure;
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar adventure={adventureUrl}/>
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