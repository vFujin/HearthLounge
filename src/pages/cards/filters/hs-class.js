import React, { Component } from 'react';
import {hs_class} from '../data.filters';

export class HsClassFilter extends Component {
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
        <ul className="topbar-right">
          {hs_class.map((element, index) =>
              <li onClick={this.handleClick.bind(this, index)} className={`${element} ${this.state.active === index && 'icon-background-active'}`} value={element} key={index}>
                <span className={`hs icon-${element}`}></span>
              </li>
          )}
        </ul>
    );
  }
}