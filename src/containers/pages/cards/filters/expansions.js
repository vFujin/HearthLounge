import React, { Component } from 'react';
import {expansions} from '../../../../data/filters';
import {IconsWrapper} from './icons-wrapper';

export class ExpansionFilter extends Component {
  render() {
    return (
        <div>
          <h3>Dodatki</h3>
          <ul className="sidebar-icons">
          {expansions.map((element, index) =>
              <li value={element.en_url} key={index}>
                <IconsWrapper active={this.props.expansion} icon_name={element.en_url} element_name={element.en_url} label={element.pl} index={index} data={element.en}/>
              </li>
          )}
          </ul>
        </div>
    );
  }
}