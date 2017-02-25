import React, { Component } from 'react';

//Sidebar Filters
import {ArchetypeFilter} from '../../../shared-assets/filters/archetype';
import {NameFilter} from '../../../shared-assets/filters/name';
import {DeckType} from '../../../shared-assets/filters/deck-type';
import {ExpansionFilter} from '../../../shared-assets/filters/expansions';
import {AdventureFilter} from '../../../shared-assets/filters/adventures';

export class DeckSelectionSidebar extends Component {
  render() {
    return (
        <div className={`filter-sidebar`}>
          <h3 className="filter-header">Filters</h3>
          <NameFilter/>
          <ArchetypeFilter/>
          <DeckType/>
          <ExpansionFilter/>
          <AdventureFilter/>
        </div>
    );
  }
}