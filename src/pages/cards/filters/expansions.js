import React, { Component } from 'react';
import {expansions} from '../data.filters';

export class ExpansionFilter extends Component {
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
          <h3>Dodatki</h3>
          <ul className="sidebar-icons">
            {expansions.map((element, index) =>
                <li onClick={this.handleClick.bind(this, index)} value={element.en} key={index}>
                    <span className={`${this.state.active === index && 'icon-background-active'} hs icon-${element.en} ${element.en}`}></span>
                    <div className="tooltip">
                        <div className="caret-up"></div>
                        <p>{element.pl}</p>
                    </div>
                </li>
            )}
          </ul>
        </div>
    );
  }
}