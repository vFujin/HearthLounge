import React, { Component } from 'react';
import { Link } from 'react-router';
export class ArenaPickerBlock extends Component {
  render() {
    return (
        <li className={'home__block arena-picker block-width-1'}>
          <Link to={'/arena-picker'}>
            <div className="header">Arena Picker</div>
          </Link>
          (filmik)
        </li>
    );
  }
}