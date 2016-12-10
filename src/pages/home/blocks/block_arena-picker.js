import React, { Component } from 'react';
import { Link } from 'react-router';
export class ArenaPickerBlock extends Component {
  render() {
    return (
        <li className={'arena-picker block-width-1'}>
          <Link to={'/arena-picker'}>
            <div>Arena Picker</div>
          </Link>
        </li>
    );
  }
}