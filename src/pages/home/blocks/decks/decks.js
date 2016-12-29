import React, { Component } from 'react';
import { Link } from 'react-router'
import { ClassSelection } from './class-selection';
import { ModeSelection } from './mode-selection';
export class DecksBlock extends Component {
  render() {
    return (
      <li className={'home__block decks block-width-3'}>
        <ClassSelection />
        <ModeSelection />
        <div className="hot-decks">

        </div>
      </li>
    );
  }
}