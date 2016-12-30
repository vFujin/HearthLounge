import React, { Component } from 'react';
import { Link } from 'react-router'
import { ClassSelection } from './class-selection';
import { ModeSelection } from './mode-selection';
import { DeckSnippet } from './deck-snippet/deck-snippet';
import { SearchDecks } from './search-decks';
export class DecksBlock extends Component {
  render() {
    return (
      <li className={'home__block decks block-width-3'}>

        <div className="left-container">
          <div className="sidebar">
            <SearchDecks/>
            <ModeSelection />
          </div>
        </div>

        <div className="right-container">
          <div className="class-filter">
            <ClassSelection/>
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
        </div>
      </li>
    );
  }
}