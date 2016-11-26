import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {StatisticsFilter} from './filters/statistics';
import {FactionFilter} from './filters/faction';
import {RaceFilter} from './filters/race';
import {DustFilter} from './filters/dust';
import {MechanicsFilter} from './filters/mechanics';
export class Cards extends Component {
  render() {
    return (
        <div className="pageContainer">
          <StatisticsFilter />
          <FactionFilter />
          <RaceFilter />
          <DustFilter />
          <MechanicsFilter />
        </div>
    );
  }
}