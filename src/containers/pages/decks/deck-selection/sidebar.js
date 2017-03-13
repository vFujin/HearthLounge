import React, { Component } from 'react';

//Sidebar Filters
import {ArchetypeFilter} from '../../../shared-assets/filters/archetype';
import {NameFilter} from '../../../shared-assets/filters/name';
import {DeckType} from '../../../shared-assets/filters/deck-type';

export class DeckSelectionSidebar extends Component {
  render() {
    return (
        <div className={`filter-sidebar`}>
          <h3 className="filter-header">Filters</h3>
          <NameFilter/>
          <ArchetypeFilter/>
          <DeckType/>
        </div>
    );
  }
}