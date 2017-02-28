import React, { Component } from 'react';
import {ManaCostFilter} from '../../../shared-assets/filters/mana-cost';
import {HsClassFilter} from  '../../../shared-assets/filters/hs-class';

export class CardsTopbarFilters extends Component {
  render() {
    return (
        <div className="topbar topbar__left topbar__right">
          {this.props.children}
          <ManaCostFilter />
          <HsClassFilter align="right" page="cards"/>
        </div>
    );
  }
}