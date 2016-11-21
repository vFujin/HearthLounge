import React, { Component } from 'react';
import {Navbar} from '../navbar';
export class CreateDeck extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <div className="pageContainer">create deck</div>
        </div>
    );
  }
}
