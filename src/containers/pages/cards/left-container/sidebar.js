import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {IsGoldenFilter} from '../../../shared-assets/filters/is-golden';
import IconFilter from '../../../shared-assets/filters/icon-filter';
import InputFilter from '../../../shared-assets/filters/input-filter';

export class Sidebar extends Component {

  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Filters</h3>

          <InputFilter attribute={this.props.race} filter="race"/>
          <InputFilter attribute={this.props.mechanics} filter="mechanics"/>
          <InputFilter attribute={this.props.faction} filter="faction"/>
          <InputFilter attribute={this.props.type} filter="type"/>

          <IconFilter header={true} filter="expansions" query={this.props.query} tooltip={true} wrapper_class="sidebar-icons"/>
          <IconFilter header={true} filter="adventures" query={this.props.query} tooltip={true} wrapper_class="sidebar-icons"/>
          <IconFilter header={true} filter="rarity"     query={this.props.query} tooltip={true} wrapper_class="sidebar-icons"/>

          <IsGoldenFilter/>

        </div>
    );
  }
}