import React, { Component } from 'react';
import {rarity} from '../../../../data/filters'
import {IconsWrapper} from './icons-wrapper';
export class RarityFilter extends Component {
  render() {
    return (
        <div>
          <h3>Rzadkość</h3>
          <ul className="sidebar-icons rarity">
            {rarity.map((element, index) =>
                <li onClick={this.props.handleFilterClick.bind(this, index, 'rarity')} className={element.en_url} value={element[index]} key={index} >
                  <IconsWrapper active={this.props.rarity} icon_name="rarity" element_name={element.en_url} label={element.pl} index={index} data={element.en}/>
                </li>
            )}
          </ul>
        </div>
    );
  }
}