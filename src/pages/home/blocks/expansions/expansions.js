import React, { Component } from 'react';
import { Link } from 'react-router';
import {ExpansionSlider} from './slider';
export class ExpansionsBlock extends Component {
  render() {
    return (
        <li className={'home__block expansions block-width-2'}>
          <Link to={'/dodatki'}>
            <div>Dodatki</div>
          </Link>
          <ExpansionSlider />
          test
        </li>
    );
  }
}