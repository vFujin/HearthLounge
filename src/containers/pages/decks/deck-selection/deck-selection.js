import React from 'react';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
const DeckSelection  = (props) => {

  const handleInputSelect = () =>{

  };

  return (
      <div className="container__page container__page--twoSided decks">
        <LeftContainer/>
        <RightContainer handleTableRowClick={props.handleTableRowClick}/>
      </div>
  );
};

export default DeckSelection;