import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {NameFilter} from '../filters/name';
import {StatisticsFilter} from '../filters/statistics';
import {FactionFilter} from '../filters/faction';
import {RaceFilter} from '../filters/race';
import {DustFilter} from '../filters/dust';
import {MechanicsFilter} from '../filters/mechanics';
import {ExpansionFilter} from '../filters/expansions';
import {AdventureFilter} from '../filters/adventures';
import {RarityFilter} from '../filters/rarity';
import {IsGoldenFilter} from '../filters/is-golden';

export class Sidebar extends Component {
  constructor(){
    super();
    this.state = null;
    this.race = '';
  }

  handleRace(v){
    this.setState({race: v});
  }
  handleRaceChange(){
    var lang = this.refs.dropdown.value;
    this.props.onRaceChange(lang);
  }
  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Filtry</h3>
          <NameFilter/>
          <StatisticsFilter/>
          <FactionFilter/>
          <RaceFilter onRaceChange={this.handleRace}/>
          <MechanicsFilter/>
          <DustFilter/>
          <ExpansionFilter/>
          <AdventureFilter/>
          <RarityFilter />
          <IsGoldenFilter />
        </div>
    );
  }
}