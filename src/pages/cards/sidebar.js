import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {NameFilter} from './filters/name';
import {StatisticsFilter} from './filters/statistics';
import {FactionFilter} from './filters/faction';
import {RaceFilter} from './filters/race';
import {DustFilter} from './filters/dust';
import {MechanicsFilter} from './filters/mechanics';
import {ExpansionFilter} from './filters/expansions';
import {AdventureFilter} from './filters/adventures';
import {RarityFilter} from './filters/rarity';
export class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar-filters">
          <h3 className="filter-header">Filtry</h3>
          <NameFilter/>
          <StatisticsFilter/>
          <FactionFilter/>
          <RaceFilter/>
          <MechanicsFilter/>
          <DustFilter/>
          <ExpansionFilter/>
          <AdventureFilter/>
          <RarityFilter />
        </div>
    );
  }
}