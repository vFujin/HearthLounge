import React, { Component } from 'react';

export class Decks extends Component {
  render() {
    return (
        <div className="pageContainer">
          <p>decks</p>
          {this.props.children}
        </div>
    );
  }
}