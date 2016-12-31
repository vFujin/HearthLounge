import React, { Component } from 'react';
export class ModeSelection extends Component {
  render() {
    return (
        <ul className="mode-selection">
          <li>
            <span className="hs-icon icon-kraken"></span>
            <p>Standard</p>
          </li>
          <li>
            <span className="hs-icon icon-wild"></span>
            <p>Dzicz</p>
          </li>
          <li>
            <p>Karczemna Bójka</p>
          </li>
          <li>
            <span className="hs-icon icon-adventures"></span>
            <p>Przygoda</p>
          </li>
        </ul>
    );
  }
}