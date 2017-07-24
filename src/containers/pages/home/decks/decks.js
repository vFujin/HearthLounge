import React from 'react';
import ClassSelection from './filters/class-selection';
import ModeSelection from './filters/mode-selection';
import DeckSnippet from '../../../shared-assets/deck-snippet/deck-snippet';
import SearchDecks from './filters/search-decks';
import {Link} from 'react-router';
import _ from 'lodash';
const DecksBlock = () => {
  return (
      <li className={`home__block decks block-width-1`}>
        <div className="home__block--header">
          <Link to="/decks">
            <span className={`hs-icon icon-decks`}></span>
            <p>{_.upperCase("decks")}</p>
            <div className="class-filter">
              <ClassSelection/>
            </div>
          </Link>
        </div>
        <div className="home__block--body">
          <div className="left-container">
            <div className="sidebar">
              <SearchDecks/>
              <ModeSelection />
            </div>
          </div>

          <div className="right-container">

            <div className="hot-decks">
                <DeckSnippet/>
                <DeckSnippet/>
                <DeckSnippet/>
                <DeckSnippet/>
                <DeckSnippet/>
                <DeckSnippet/>
                <DeckSnippet/>
                <DeckSnippet/>
                <DeckSnippet/>
                <DeckSnippet/>
            </div>
          </div>
        </div>
      </li>
  );
};

export default DecksBlock;