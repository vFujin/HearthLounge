import React, { Component } from 'react';
import {adventures} from '../data.filters';

export class AdventureFilter extends Component {
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
        <div>
          <h3>Przygody</h3>
          <ul className="sidebar-icons">
            {adventures.map((element, index) =>
                <li onClick={this.handleClick.bind(this, index)} className={`${element} ${this.state.active === index && 'icon-background-active'}`} value={element} key={index}>
                  <span className={`hs icon-${element}`}></span>
                </li>
            )}
          </ul>
        </div>
    );
  }
}