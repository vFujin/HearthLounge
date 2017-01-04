import React, { Component } from 'react';
import {rarity} from '../../../data/cards.filters'
import {IconsWrapper} from './icons-wrapper';
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
                <li onClick={this.handleClick.bind(this, index)} className={element.en_url} value={element[index]} key={index}>
                  <IconsWrapper active={this.state.active} icon_name="rarity" element_name={element.en_url} label={element.pl} index={index}/>
                </li>
            )}
          </ul>
        </div>
    );
  }
}