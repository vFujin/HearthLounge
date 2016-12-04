import React, { Component } from 'react';
import {rarity} from '../data.filters'

export class RarityFilter extends Component {
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
          <h3>Rzadkość</h3>
          <ul className="sidebar-icons rarity">
            {rarity.map((element, index) =>
                <li onClick={this.handleClick.bind(this, index)} className={element.className} value={element[index]} key={index}>
                  <span className={`hs icon-rarity ${this.state.active === index && 'icon-font-active'}`}></span>
                </li>
            )}
          </ul>
        </div>
    );
  }
}