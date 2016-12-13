import React, { Component } from 'react';
import {hs_class} from '../../../data/cards.filters';
import {IconsWrapper} from './icons-wrapper';

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
                <IconsWrapper active={this.state.active} icon_name={element.en} element_name={element.en} label={element.pl} index={index}/>
              </li>
          )}
        </ul>
    );
  }
}