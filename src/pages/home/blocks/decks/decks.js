import React, { Component } from 'react';
import { Link } from 'react-router'
import { ClassSelection } from './class-selection';
import { ModeSelection } from './mode-selection';
export class DecksBlock extends Component {
  render() {
    return (
      <li className={'home__block decks block-width-3'}>
        <div className="topbar">
          <ClassSelection />
        </div>
        <div className="sidebar">
          <ModeSelection />
        </div>
        <div className="hot-decks">
            <div className="deck">
              
            </div>
        </div>
      </li>
    );
  }
}