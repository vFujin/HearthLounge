import React, { Component } from 'react';
import { Link } from 'react-router';
export class ExpansionsBlock extends Component {
  render() {
    return (
        <li className={'expansions block-width-2'}>
          <Link to={'/dodatki'}>
            <div>Dodatki</div>
          </Link>
        </li>
    );
  }
}