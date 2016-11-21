import React, { Component } from 'react';
import {Navbar} from '../navbar';
export class Forum extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <div className="pageContainer">forum</div>
        </div>
    );
  }
}