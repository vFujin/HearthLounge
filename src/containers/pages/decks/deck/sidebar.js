import React, { Component } from 'react';

//Deck sidebar
import {ChoosenCards} from './sidebar/choosen-cards';
import {DeckGraph} from './sidebar/deck-graph' ;

export class DeckSidebar extends Component {

  render() {
    return (
        <div className="sidebar">
          <div className={`deck-sidebar deck-details`}>
            <h3 className="filter-header">Krzywa Many?</h3>
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
            <h3>Lista kart</h3>
            <ChoosenCards/>
          </div>
        </div>
    );
  }
}