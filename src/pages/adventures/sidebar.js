import React, { Component } from 'react';
import {adventures} from '../../data/cards.filters';

export class Sidebar extends Component {
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
        <div className="sidebar">
          <h3 className="filter-header">Przygody</h3>
          <ul className="sidebar-icons">
            {adventures.map((element, index) =>
                <li onClick={this.handleClick.bind(this, index)} value={element.en} key={index}>
                  <span className={`hs-icon icon-${element.en} ${this.state.active === this.state.index && 'icon-background-active'}`}></span>
                  <p>{element.pl}</p>
                </li>
            )}
          </ul>
        </div>
    );
  }
}