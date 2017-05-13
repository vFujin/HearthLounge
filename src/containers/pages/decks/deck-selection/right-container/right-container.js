import React from 'react';
import Topbar from './topbar';
import DeckList from './deck-list';

const RightContainer = ({adventuresToggled, decks, handleTableRowClick, cards, handleModeFilterClick, handleClassFilterClick, handleAdventureFilterClick}) => {
  return (
      <div className="container__page--inner container__page--right">
        <Topbar adventuresToggled={adventuresToggled}
                handleModeFilterClick={handleModeFilterClick}
                handleAdventureFilterClick={handleAdventureFilterClick}
                handleClassFilterClick={handleClassFilterClick}/>
        <div className="content">
          <DeckList decks={decks} cards={cards} handleTableRowClick={handleTableRowClick}/>
        </div>
      </div>
  )
};

export default RightContainer;