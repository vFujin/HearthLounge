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
              <li onClick={this.handleClick.bind(this, index)} value={element.en} key={index}>
                <span className={`${this.state.active === index && 'icon-background-active'} hs icon-${element.en} ${element.en}`}></span>
                <div className="tooltip">
                  <div className="caret-up"></div>
                  <p>{element.pl}</p>
                </div>
              </li>
          )}
        </ul>
    );
  }
}