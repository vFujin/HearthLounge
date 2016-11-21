import React, { Component } from 'react';
import {Navbar} from '../navbar';
export class Tournaments extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <div className="pageContainer">tournaments</div>
        </div>
    );
  }
}
