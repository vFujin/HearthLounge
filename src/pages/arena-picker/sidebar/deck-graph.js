import React, { Component } from 'react';

export class DeckGraph extends Component {
  render() {
    return (
          <li>
            <div className="count">0</div>
            <div className="bar"></div>
            <div className={`hs-icon icon-mana-${this.props.cost}`}></div>
          </li>
    );
  }
}
