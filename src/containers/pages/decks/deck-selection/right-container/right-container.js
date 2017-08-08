import React from 'react';
import Topbar from './topbar';
import DeckList from './deck-list';

const RightContainer = ({adventuresToggled, decks, handleModeFilterClick, handleClassFilterClick,
                          handleAdventureFilterClick, handleDeckSnippetClick, activeAdventure, activeMode, activeClass}) => {
  return (
      <div className="container__page--inner container__page--right">
        <Topbar adventuresToggled={adventuresToggled}
                handleModeFilterClick={handleModeFilterClick}
                handleAdventureFilterClick={handleAdventureFilterClick}
                handleClassFilterClick={handleClassFilterClick}
                activeMode={activeMode}
                activeAdventure={activeAdventure}
                activeClass={activeClass}/>
        <div className="content scrollable">
          <DeckList decks={decks} handleDeckSnippetClick={handleDeckSnippetClick}/>
        </div>
      </div>
  )
};

export default RightContainer;