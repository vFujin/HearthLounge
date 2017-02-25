import React, { Component } from 'react';
import {Link} from 'react-router';
import {mana_cost} from '../../../data/filters';

export class ManaCostFilter extends Component {
  render() {
    // let manaCost = this.props.params['mana-cost'];
    // console.log(manaCost);
    return (
        <ul className="topbar-left">
          {mana_cost.map((element, i) =>
              <li value={`mana-cost-${element.mana_cost}`} key={i}>
                <Link to={`cards?&cost=${element.mana_cost}`}>
                  <span className={`hs icon-mana-${element.mana_cost} ${i && 'mana-active'}`}></span>
                </Link>
              </li>
          )}
        </ul>
  );
  }
}