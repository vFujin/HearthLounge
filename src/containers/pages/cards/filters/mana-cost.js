import React, { Component } from 'react';
import {mana_cost} from '../../../data/filters';

export class ManaCostFilter extends Component {
  render() {
    return (
        <ul className="topbar-left">
          {mana_cost.map((element, i) =>
              <li onClick={this.props.handleFilterClick.bind(this, i, 'manaFilter')} value={`mana-cost-${element.mana_cost}`} key={i}>
                  <span className={`hs icon-mana-${element.mana_cost} ${this.props.manaFilter === i && 'mana-active'}`}></span>
              </li>
          )}
        </ul>
  );
  }
}