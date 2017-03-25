import React, { Component } from 'react';
import {DeckGraph} from './sidebar/deck-graph';
import {ChoosenCards} from './sidebar/choosen-cards';
export class DeckSidebar extends Component {
  render() {
    return (
        <div className={`sidebar__body ${this.props.activeSidebar === 'deck' ? 'active' : 'display-none'}`}>
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
            <h3>Wybrane karty</h3>
            <ChoosenCards/>
          </div>
        </div>
    );
  }
}
