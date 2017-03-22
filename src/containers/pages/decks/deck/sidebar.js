import React, { Component } from 'react';

//Deck sidebar
import {ChoosenCards} from './sidebar/choosen-cards';
import {DeckGraph} from './sidebar/deck-graph' ;

export class DeckSidebar extends Component {

  render() {
    return (
        <div>
          <h3 className="sidebar__header">Mana Curve</h3>
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
            <h3 className="sidebar__header">Cards</h3>
            <ChoosenCards/>
          </div>
      </div>
    );
  }
}



