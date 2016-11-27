import React, { Component } from 'react';
import {mana_cost} from '../filters';

export class ManaCostFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({value});
  }

  render() {
    return (
        <ul>
          {mana_cost.map((element, index) =>
              <li key={index}>
                  <span className={`hs icon-mana-${element.mana_cost}`}></span>
              </li>
          )}
        </ul>
    );
  }
}