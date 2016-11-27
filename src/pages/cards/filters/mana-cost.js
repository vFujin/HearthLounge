import React, { Component } from 'react';
import {mana_cost} from '../data.filters';

export class ManaCostFilter extends Component {
  render() {
    return (
        <ul className="topbar-left">
          {mana_cost.map((element, index) =>
              <li value={`mana-cost-${element.mana_cost}`} key={index}>
                  <span className={`hs icon-mana-${element.mana_cost}`}></span>
              </li>
          )}
        </ul>
    );
  }
}