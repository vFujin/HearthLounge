import React from 'react';
import RightContainer from './right-container/right-container';
const DeckSelection  = (props) => {

  return (
      <div className="container__page container__page--twoSided decks">
        <div className="container__page--inner container__page--left">
          <h3 className="sidebar__header">Filters</h3>
          <div className="sidebar__body">

          </div>
        </div>
        <RightContainer handleTableRowClick={props.handleTableRowClick}/>
      </div>
  );
};

export default DeckSelection;