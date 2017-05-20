import React from 'react';


import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";

const Deck = ({activeDeck}) => {


  return (
      <div className="container__page container__page--twoSided deck">
        <LeftContainer activeDeck={activeDeck} />
        <RightContainer activeDeck={activeDeck}/>

      </div>
  );
};

export default Deck;