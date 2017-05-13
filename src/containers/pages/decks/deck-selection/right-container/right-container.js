import React from 'react';
import Topbar from './topbar';
import DeckList from './deck-list';

const RightContainer = ({decks, handleTableRowClick, cards, handleModeFilterClick, handleClassFilterClick}) => {
  return (
      <div className="container__page--inner container__page--right">
        <Topbar handleModeFilterClick={handleModeFilterClick} handleClassFilterClick={handleClassFilterClick}/>
        <div className="content">
          <DeckList decks={decks} cards={cards} handleTableRowClick={handleTableRowClick}/>
        </div>
      </div>
  )
};

export default RightContainer;