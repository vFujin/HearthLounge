import React, { Component } from 'react';
import DeckGraph from './sidebar/deck-graph';
import ChoosenCards from './sidebar/choosen-cards';
const DeckSidebar = props => {
  return (
      <div className={`sidebar__body ${props.activeSidebar === 'deck' ? 'active' : 'display-none'}`}>
        <div className="container__mana-curve">
          <ul className="graph">
            <DeckGraph cost="0" deck={props.deck}/>
            <DeckGraph cost="1" deck={props.deck}/>
            <DeckGraph cost="2" deck={props.deck}/>
            <DeckGraph cost="3" deck={props.deck}/>
            <DeckGraph cost="4" deck={props.deck}/>
            <DeckGraph cost="5" deck={props.deck}/>
            <DeckGraph cost="6" deck={props.deck}/>
            <DeckGraph cost="7-plus" deck={props.deck}/>
          </ul>
          <h3>Choosen Cards <button className="btn-pearl">More details</button></h3> {/* consider changing btn to icon*/}
          <ChoosenCards deck={props.deck} countCards={props.countCards}/>
        </div>
      </div>
  );
};

export default DeckSidebar;