import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {StatisticsFilter} from './filters/statistics';
import {FactionFilter} from './filters/faction';
import {RaceFilter} from './filters/race';
import {DustFilter} from './filters/dust';
import {MechanicsFilter} from './filters/mechanics';
import {ManaCostFilter} from './filters/mana-cost';
import {HsClassFilter} from  './filters/hs-class';
export class Cards extends Component {
  render() {
    return (
        <div className="pageContainer cards">
          <div className="sidebar-filters">
            Dodaj Filtry
            <StatisticsFilter/>
            <FactionFilter/>
            <RaceFilter/>
            <MechanicsFilter/>
            <DustFilter/>
          </div>
          <div className="topbar-filters">
            <ManaCostFilter/>
            <HsClassFilter/>
          </div>
        </div>
    );
  }
}