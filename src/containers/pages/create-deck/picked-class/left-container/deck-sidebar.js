import React, { Component } from 'react';
import {DeckGraph} from './sidebar/deck-graph';
import ChoosenCards from './sidebar/choosen-cards';
const DeckSidebar = props => {
  return (
      <div className={`sidebar__body ${props.activeSidebar === 'deck' ? 'active' : 'display-none'}`}>
        <div className="container__mana-curve">
          <ul className="graph">
            <DeckGraph cost="0"/>
            <DeckGraph cost="1"/>
            <DeckGraph cost="2"/>
            <DeckGraph cost="3"/>
            <DeckGraph cost="4"/>
            <DeckGraph cost="5"/>
            <DeckGraph cost="6"/>
            <DeckGraph cost="7-plus"/>
          </ul>
          <h3>Choosen Cards</h3>
          <ChoosenCards deck={props.deck} countCards={props.countCards}/>
        </div>
      </div>
  );
};

export default DeckSidebar;