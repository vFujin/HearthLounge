import React from 'react';
import ClassSelection from './filters/class-selection';
import ModeSelection from './filters/mode-selection';
import DeckSnippet from '../../../shared-assets/deck-snippet/deck-snippet';
import SearchDecks from './filters/search-decks';
const DecksBlock = () => {
  return (
      <div>
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
      </div>
  );
};

export default DecksBlock;