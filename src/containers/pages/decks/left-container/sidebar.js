import React, { Component } from 'react';
import {ArchetypeFilter} from '../filters/archetype';
import {NameFilter} from '../filters/name';
import {DeckType} from '../filters/deck-type';
import {ExpansionFilter} from '../filters/expansions';
import {AdventureFilter} from '../filters/adventures';

export class Sidebar extends Component {

  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Filtry</h3>
          <NameFilter/>
          <ArchetypeFilter/>
          <DeckType/>
          <ExpansionFilter/>
          <AdventureFilter/>
        </div>
    );
  }
}