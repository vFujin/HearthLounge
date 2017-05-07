import React from 'react';
import Topbar from './topbar';
import DeckList from './deck-list';

const RightContainer = ({decks, handleTableRowClick}) => {
  return (
      <div className="container__page--inner container__page--right">
        <Topbar />
        <div className="content">
          <DeckList decks={decks} handleTableRowClick={handleTableRowClick}/>
        </div>
      </div>
  )
};

export default RightContainer;