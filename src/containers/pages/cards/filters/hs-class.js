import React, { Component } from 'react';
import {hs_class} from '../../../data/filters';
import {IconsWrapper} from './icons-wrapper';

export class HsClassFilter extends Component {
  render() {
    return (
       <ul className="topbar-right">
          {hs_class.map((element, index) =>
              <li onClick={this.props.handleFilterClick.bind(this, index, 'hsClass')} value={element.en} key={index}>
                <IconsWrapper active={this.props.hsClass} icon_name={element.en} element_name={element.en} label={element.pl} index={index} />
              </li>
          )}
        </ul>
    );
  }
}