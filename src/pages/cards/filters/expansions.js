import React, { Component } from 'react';
import {IconsWrapper} from './icons-wrapper';
import {expansions} from '../../../data/cards.filters';

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
                <IconsWrapper active={this.state.active} icon_name={element.en} element_name={element.en} label={element.pl} index={index}/>
              </li>
          )}
          </ul>
        </div>
    );
  }
}