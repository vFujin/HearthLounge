import React, { Component } from 'react';
import { Link } from 'react-router'
import { ClassSelection } from './class-selection';
import { ModeSelection } from './mode-selection';
import { DeckSnippet } from './deck-snippet/deck-snippet';
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
          <div className="upper-row">
            <DeckSnippet/>
            <DeckSnippet/>
            <DeckSnippet/>
          </div>
          <div className="bottom-row">
            <DeckSnippet/>
            <DeckSnippet/>
            <DeckSnippet/>
          </div>
        </div>
      </li>
    );
  }
}