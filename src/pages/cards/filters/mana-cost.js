import React, { Component } from 'react';
import {mana_cost} from '../data.filters';

export class ManaCostFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {active: null};
  }
  handleClick(i) {
    let isActive = this.state.active === i ? null : i;
    this.setState({active: isActive});
  }



  render() {

    return (
        <ul className="topbar-left">
          {mana_cost.map((element, i) =>
              <li onClick={this.handleClick.bind(this, i)} value={`mana-cost-${element.mana_cost}`} key={i}>
                  <span className={`hs icon-mana-${element.mana_cost} ${this.state.active === i && 'mana-active'}`}></span>
              </li>
          )}
        </ul>
  );
  }
}