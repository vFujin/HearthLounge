import React, { Component } from 'react';

//Sidebar Filters
import {ArchetypeFilter} from '../filters/archetype';
import {NameFilter} from '../filters/name';
import {DeckType} from '../filters/deck-type';
import {ExpansionFilter} from '../filters/expansions';
import {AdventureFilter} from '../filters/adventures';

//Deck sidebar
import {ChoosenCards} from './deck-sidebar/choosen-cards';
import {DeckGraph} from './deck-sidebar/deck-graph';

export class Sidebar extends Component {

  render() {
    return (
        <div className="sidebar">
          <div className={`filter-sidebar ${this.props.sidebarFilters}`}>
            <h3 className="filter-header">Filtry</h3>
            <NameFilter/>
            <ArchetypeFilter/>
            <DeckType/>
            <ExpansionFilter/>
            <AdventureFilter/>
          </div>
          <div className={`deck-sidebar ${this.props.deckSidebar}`}>
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
            <ChoosenCards/>
          </div>
        </div>
    );
  }
}