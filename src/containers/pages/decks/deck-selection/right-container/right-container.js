import React from 'react';
import Topbar from './topbar';
import DeckList from './deck-list';

const RightContainer = ({adventuresToggled, decks, handleTableRowClick, handleModeFilterClick, handleClassFilterClick,
                          handleAdventureFilterClick, activeAdventure, activeMode, activeClass}) => {
  return (
      <div className="container__page--inner container__page--right">
        <Topbar adventuresToggled={adventuresToggled}
                handleModeFilterClick={handleModeFilterClick}
                handleAdventureFilterClick={handleAdventureFilterClick}
                handleClassFilterClick={handleClassFilterClick}
                activeMode={activeMode}
                activeAdventure={activeAdventure}
                activeClass={activeClass}/>
        <div className="content">
          <DeckList decks={decks} handleTableRowClick={handleTableRowClick}/>
        </div>
      </div>
  )
};

export default RightContainer;